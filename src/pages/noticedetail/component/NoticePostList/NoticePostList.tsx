// import React from 'react';
// import * as S from './NoticePostList.styled';
// import formatWorkTime from '@/shared/utils/formatWorkTime';
// import PostCard from '@/shared/components/Post/PostCard/PostCard';

// interface Props {
//   noticeList: any[];  
//   store: any;        
// }

// export const NoticePostList = ({ noticeList, store }: Props) => {
//   return (
//     <S.Layout>
//       {noticeList.map((notice, index) => (
//         <PostCard
//           key={index}
//           isClosed={notice.closed}
//           notice_id={notice.id}
//           shop_id={store.id}
//           imageUrl={store.imageUrl}
//           shopName={store.name}
//           duration={formatWorkTime({
//             type: 'notice',
//             startsAt: notice.startsAt,
//             workHour: notice.workhour,
//           })}
//           address={store.address1}
//           defaultHourlyPay={store.originalHourlyPay}
//           currentHourlyPay={Number(notice.hourlyPay)}
//         />
//       ))}
//     </S.Layout>
//   );
// };

// export default NoticePostList;
