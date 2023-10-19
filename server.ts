import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import nodemailer from "nodemailer";
import {
  SUCCESSFUL_TEMPLATE,
  ERROR_TEMPLATE,
  WITHDRAWAL_PROCESS_DONE,
} from "./email-templates.js";
import axios from "axios";
import { divideByDigitsToBase } from "./utils.js";
import { TEMPLATE_HTML } from "./template_withdraw.js";

interface SendEmail {
  to: string;
  gameSpecific: GameSpecs;
  accepted: boolean;
  authorizationKey: string;
}

interface SendWithdrawalNotification {
  amountFiat: string;
  manyWithdraws: string;
  emails: string[];
  chunkSize: number;
}

interface GameSpecs {
  name: string;
  wAmount: number;
  wSymbol: string;
  wDateRequest: string;
  tx: string;
}

interface ChainAvalaible {
  minWithdrawal: number;
  placeholder: string;
  name: string;
  symbol: string;
  unitName: string;
  decimals: number;
  disabled: boolean;
  baseReward: number;
}

let CAMPAIGN_SEND_WITHDRAWAL_DONE_STARTED = false;

const app = express();
dotenv.config();
app.use(helmet());
app.use(json());
app.use(cors({}));

async function sendEmail(
  mailConfig: SendWithdrawalNotification,
  emails: Array<string>
) {
  const message = WITHDRAWAL_PROCESS_DONE(
    mailConfig.manyWithdraws,
    mailConfig.amountFiat
  );
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    from: process.env.EMAIL_USER,
  });
  await transporter.sendMail({
    from: `Orim Games <${process.env.EMAIL_USER}>`,
    to: emails,
    subject: `The moment you were waiting for`,
    text: "Tu quiere tu quiere tu quiere",
    html: message,
  });
}

app.get("/", (req, res) => {
  res.send("1.0.0");
});
app.post("/sendWithdrawalDone", async (req, res) => {
  try {
    if (CAMPAIGN_SEND_WITHDRAWAL_DONE_STARTED == true) {
      return res.status(500).send("This campaign has been started already");
    }
    CAMPAIGN_SEND_WITHDRAWAL_DONE_STARTED = true;
    const mailConfig: SendWithdrawalNotification = req.body;
    await sendEmail(
      mailConfig,
      mailConfig.emails.slice(0, mailConfig.chunkSize)
    );

    let currentChunk = mailConfig.chunkSize;
    if (mailConfig.emails.length > currentChunk) {
      const interval = setInterval(async () => {
        console.log(currentChunk);
        const lote = mailConfig.emails.slice(
          currentChunk,
          currentChunk + mailConfig.chunkSize
        );
        currentChunk += mailConfig.chunkSize;

        try {
          await sendEmail(mailConfig, lote);

          if (currentChunk >= mailConfig.emails.length) {
            clearInterval(interval);
            CAMPAIGN_SEND_WITHDRAWAL_DONE_STARTED = false;
          }
        } catch (error) {
          clearInterval(interval);
          CAMPAIGN_SEND_WITHDRAWAL_DONE_STARTED = false;
          res.status(500).send(error);
        }
      }, 60000);
      res.send("Campaign started");
    } else {
      CAMPAIGN_SEND_WITHDRAWAL_DONE_STARTED = false;
      res.send("Campaign started and finished");
    }
  } catch (error) {
    CAMPAIGN_SEND_WITHDRAWAL_DONE_STARTED = false;
    res.status(500).send(error);
  }
});
app.post("/sendWithdrawalMail", async (req, res) => {
  try {
    const mailConfig: SendEmail = req.body;
    if (
      !mailConfig.authorizationKey ||
      mailConfig.authorizationKey != process.env.CODE_API
    ) {
      res.status(401).send("You are not authorized!");
    }
    let activeChain: ChainAvalaible = null;
    const chainsAvalaibles: ChainAvalaible[] = (
      await axios.get("https://api.orimgames.com/chainsAvalaible")
    ).data;

    activeChain = chainsAvalaibles.find(
      (chainParam) => chainParam.symbol === mailConfig.gameSpecific.wSymbol
    );

    if (!chainsAvalaibles || chainsAvalaibles.length === 0) {
      res.status(500).send("The chains are empty!");
    }

    if (!activeChain) {
      res.status(500).send("No active chain found!");
    }

    const message = mailConfig.accepted
      ? SUCCESSFUL_TEMPLATE(
          mailConfig.gameSpecific.name,
          activeChain.symbol,
          mailConfig.gameSpecific.wAmount,
          divideByDigitsToBase(
            mailConfig.gameSpecific.wAmount,
            activeChain.decimals
          ).toFixed(activeChain.decimals),
          activeChain.unitName,
          mailConfig.gameSpecific.tx
        )
      : ERROR_TEMPLATE(mailConfig.gameSpecific.name);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      from: process.env.EMAIL_USER,
    });
    transporter
      .sendMail({
        from: `Orim Games <${process.env.EMAIL_USER}>`,
        to: mailConfig.to,
        subject: `${mailConfig.gameSpecific.name} - ${mailConfig.gameSpecific.wAmount} ${activeChain.unitName} (${mailConfig.gameSpecific.wSymbol}) Withdrawal request`,
        text: message,
        html: TEMPLATE_HTML(message, mailConfig.accepted),
      })
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        throw error;
      });
  } catch (error) {
    res.status(500).send(error);
  }
});

const PORT = process.env.PORT || 1488;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
