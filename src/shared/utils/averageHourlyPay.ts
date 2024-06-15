interface Props {
  currentHourlyPay: number;
  defaultHourlyPay: number;
}

function averageHourlyPay({ currentHourlyPay, defaultHourlyPay }: Props) {
  return Math.trunc(
    ((currentHourlyPay - defaultHourlyPay) / defaultHourlyPay) * 100,
  );
}

export default averageHourlyPay;
