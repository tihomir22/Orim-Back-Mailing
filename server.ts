import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import nodemailer from "nodemailer";
import { SUCCESSFUL_TEMPLATE, ERROR_TEMPLATE } from "./email-templates.js";
import axios from "axios";
import { parseAmount } from "./utils.js";
import { TEMPLATE_HTML } from "./template_withdraw.js";

interface SendEmail {
  to: string;
  gameSpecific: GameSpecs;
  accepted: boolean;
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

const app = express();
dotenv.config();
app.use(helmet());
app.use(json());
app.use(cors({}));

app.get("/", (req, res) => {
  res.send("1.0.0");
});
app.post("/sendWithdrawalMail", async (req, res) => {
  try {
    const mailConfig: SendEmail = req.body;
    let activeChain: ChainAvalaible = null;
    const chainsAvalaibles: ChainAvalaible[] = (
      await axios.get("https://api.orimgames.com/chainsAvalaible")
    ).data;

    activeChain = chainsAvalaibles.find(
      (chainParam) => chainParam.symbol === mailConfig.gameSpecific.wSymbol
    );

    if (!chainsAvalaibles || chainsAvalaibles.length === 0) {
      throw new Error("The chains ara empty!");
    }

    if (!activeChain) {
      throw new Error("No active chain found!");
    }

    const message = mailConfig.accepted
      ? SUCCESSFUL_TEMPLATE(
          mailConfig.gameSpecific.name,
          activeChain.symbol,
          parseAmount(mailConfig.gameSpecific.wAmount, activeChain.decimals),
          mailConfig.gameSpecific.wAmount,
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
        html: TEMPLATE_HTML(message),
      })
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        throw error;
      });
  } catch (error) {
    throw error;
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  // console.log(`Server listening on port ${PORT}...`);
});
