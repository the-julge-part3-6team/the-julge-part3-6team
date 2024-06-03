import { Logo } from '@/components/auth';
import { PageLayout } from '@/components/auth';
import SigninForm from '@/widgets/signin/ui/signinForm/SigninForm';

const index = () => {
  return (
    <PageLayout>
      <Logo />
      <SigninForm />
    </PageLayout>
  );
};

export default index;
