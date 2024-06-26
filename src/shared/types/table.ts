interface ITable {
  title: string;
  date: string;
  price: string;
  status: '대기중' | '거절' | '승인 완료';
}
interface tableProfileStatus {
  list: {
    item: {
      createdAt: string;
      id: string;
      notice: {
        item: Notice;
      };
      shop: {
        item: Store;
      };
      status: 'rejected' | 'pending' | 'accepted' | 'canceled';
    };
  }[];
  handlePageChange: (page: number) => void;
  currentPage: number;
  totalPages: number;
  onClickEvent?: any;
  isAccepted?: boolean;
}
