export const dateTransfromKST = (date: string | Date) => {
  if (!date) return;
  const dateObj = new Date(date);
  const now = new Date();
  // 한국 시간은 UTC+9 이므로 9시간을 더합니다.
  const kstOffset = 9 * 60 * 60 * 1000;
  const kstDateObj = new Date(dateObj.getTime() + kstOffset);

  // 현재 시각의 분을 가져옵니다.
  const currentMinutes = now.getUTCMinutes();

  // 날짜의 23시 59분 59초로 설정합니다.
  kstDateObj.setUTCHours(now.getUTCHours());
  kstDateObj.setUTCMinutes(currentMinutes + 1);

  console.log(kstDateObj);

  const year = kstDateObj.getUTCFullYear();
  const month = String(kstDateObj.getUTCMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1 해줍니다.
  const day = String(kstDateObj.getUTCDate()).padStart(2, '0');
  const hours = String(kstDateObj.getUTCHours()).padStart(2, '0');
  const minutes = String(kstDateObj.getUTCMinutes()).padStart(2, '0');
  const seconds = String(kstDateObj.getUTCSeconds()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
  return formattedDate;
};
