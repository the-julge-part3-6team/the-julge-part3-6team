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
  notification: Notifications[];
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
        <NotificationModal modalContents={notification} modalKey="알림모달" />
      </li>
    </>
  );
};
