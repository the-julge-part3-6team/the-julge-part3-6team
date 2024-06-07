import Image from 'next/image';
import { Employee } from '../employee/Employee';
import { Employer } from '../employer/Employer';
import notificationImg from '@/assets/notification.svg';
import notificationOnImg from '@/assets/notification-on.svg';

interface Props {
  type: 'employer' | 'employee' | '';
  testAlarm: string;
}

export const IsLogin = ({ type, testAlarm }: Props) => {
  return (
    <>
      {type === 'employer' ? <Employer /> : <Employee />}
      <li>
        <a href="">
          <Image src={testAlarm ? notificationOnImg : notificationImg} alt="" />
        </a>
      </li>
    </>
  );
};
