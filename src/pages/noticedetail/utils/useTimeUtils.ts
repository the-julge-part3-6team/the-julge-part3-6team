export const formatWorkTime = (startsAt: string, workhour: number): string => {
  const startDate = new Date(startsAt);
  const endDate = new Date(startDate.getTime() + workhour * 60 * 60 * 1000);

  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  const formatTime = (date: Date): string => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return `${formatDate(startDate)} ${formatTime(startDate)}~${formatTime(endDate)} (${workhour}시간)`;
};
