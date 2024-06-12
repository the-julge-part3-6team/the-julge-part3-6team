export const calculatePriceChange = (originalPay: number, currentPay: number): number => {
  return ((currentPay - originalPay) / originalPay) * 100;
};
