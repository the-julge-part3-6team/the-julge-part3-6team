import Image from 'next/image';
import { Employee } from '../employee/Employee';
import { Employer } from '../employer/Employer';
import notificationImg from '@/assets/notification.svg';
import notificationOnImg from '@/assets/notification-on.svg';
import { useModal } from '@/shared/store/useModal';
import { NotificationModal } from '@/components/notifications';
import { Notifications } from '@/shared/types/notification';

interface Props {
  type: 'employer' | 'employee' | '';
  notification?: Notifications[];
}

export const IsLogin = ({ type, notification }: Props) => {
  const { isOpen, setIsOpen, setIsClose } = useModal();

  const toggleNotificationModal = () => {
    if (isOpen) {
      setIsClose();
    } else {
      setIsOpen('알림모달');
    }
  };

  const notifications: Notifications[] = [
    {
      id: 1,
      title: 'HS 과일주스',
      date: '2023-01-14 15:00~18:00',
      status: 'approved',
      timeAgo: '1분 전',
    },
    {
      id: 2,
      title: '써니 브런치 레스토랑',
      date: '2023-01-14 15:00~18:00',
      status: 'approved',
      timeAgo: '3분 전',
    },
    {
      id: 3,
      title: '수리 에스프레소 샵',
      date: '2023-01-14 15:00~18:00',
      status: 'rejected',
      timeAgo: '7분 전',
    },
  ];

  return (
    <>
      {type === 'employer' ? <Employer /> : <Employee />}
      <li>
        <button>
          <Image
            src={notification ? notificationOnImg : notificationImg}
            alt="alram_icon"
            onClick={toggleNotificationModal}
          />
        </button>
      </li>
      <NotificationModal modalContents={notifications} modalKey="알림모달" />
    </>
  );
};
