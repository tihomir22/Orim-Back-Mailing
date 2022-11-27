export function divideByDigitsToBase(
  inWeiNumber: number,
  numberDigits: number
) {
  for (let i = 0; i < numberDigits; i++) {
    inWeiNumber = inWeiNumber / 10;
  }
  return inWeiNumber;
}
