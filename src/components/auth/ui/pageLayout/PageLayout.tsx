import * as S from './PageLayout.styled';

interface Props {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: Props) => {
  return <S.PageLayout>{children}</S.PageLayout>;
};
