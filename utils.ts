export function parseAmount(amount: number, digitsChain: number) {
  let newAmount = amount;
  for (let i = 0; i < digitsChain; i++) {
    newAmount = newAmount * 10;
  }
  return newAmount;
}
