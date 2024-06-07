export interface ITable {
  title: string;
  date: string;
  price: string;
  status: '대기중' | '거절' | '승인 완료';
}
