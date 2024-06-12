interface Props {
  currentHourlyPay: number;
  defaultHourlyPay: number;
}

function averageHourlyPay({ currentHourlyPay, defaultHourlyPay }: Props) {
  return (
    Math.trunc(
      ((currentHourlyPay - defaultHourlyPay) / defaultHourlyPay) * 10,
    ) * 10
  );
}

export default averageHourlyPay;
