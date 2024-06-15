import * as S from './ProfileContent.styled';
import { renderSpinner } from '@/shared/utils/renderSpinner';
import { AddProfile, ViewProfile } from '@/components/user';

interface Props {
  userData: UserDataType;
  isLoading: boolean;
}

export const ProfileContent = ({ userData, isLoading }: Props) => {
  const content = userData?.phone ? (
    <ViewProfile userData={userData} />
  ) : (
    <AddProfile />
  );

  return (
    <>
      {content.type.name === 'ViewProfile' ? (
        <>
          <S.Container>
            <S.ContentWrap>
              <S.ViewFlexBox>
                <S.MyPageHeader>내 프로필</S.MyPageHeader>
                {renderSpinner(content, isLoading)}
              </S.ViewFlexBox>
            </S.ContentWrap>
          </S.Container>
        </>
      ) : (
        <>
          <S.Container>
            <S.ContentWrap>
              <S.MyPageHeader>내 프로필</S.MyPageHeader>
              <S.HeightCon>{renderSpinner(content, isLoading)}</S.HeightCon>
            </S.ContentWrap>
          </S.Container>
        </>
      )}
    </>
  );
};
