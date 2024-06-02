export interface Notifications {
  id: number;
  title: string;
  date: string;
  status: 'approved' | 'rejected';
  timeAgo: string;
}
