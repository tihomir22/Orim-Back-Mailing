export const SUCCESSFUL_TEMPLATE = (
  nameGame: string,
  symbol: string,
  amountInSmallUnit: number,
  amountInBigUnit: number,
  nameUnits: string,
  tx: string
) => {
  return `Dear player,

We are glad to have you playing our games, and we have no bigger satisfaction than to reward you for your dedication on playing the ${nameGame}.

For that reason, this email is to inform you that we have just realized the transaction on the ${symbol} network with the ${amountInSmallUnit} ${nameUnits} (${amountInBigUnit} ${symbol} ) requested by you.

We are thankful you played our games, and we would like to hear from your experience doing so, please don't hesitate in giving us a review in the Google Play Store telling how the whole process it was, and helping other users to know about us!

Below we are attaching the tx, so you can track it :)

${tx}

Kind regards from the whole Orim Games team

Have a good day!`;
};

export const ERROR_TEMPLATE = (nameGame: string) => {
  return `Dear player,

We are glad to have you playing our games, and we have no bigger satisfaction than to reward you for your dedication on playing the ${nameGame} game.

However, after studying your case, we have detected abnormal activities while playing our games and we cannot unfortunately proceed with the withdrawal.

For that reason, we would like to ask you, if you could provide us some proofs of your game progress.

On the meanwhile, your requests will be halted until you answer to this mail.

Kind regards from the whole Orim Games team

Have a good day!
    `;
};
