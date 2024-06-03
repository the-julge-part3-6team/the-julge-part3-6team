import { SignupForm } from '@/widgets/signup';
import { Logo } from '@/components/auth';
import { PageLayout } from '@/components/auth';

const index = () => {
  return (
    <PageLayout>
      <Logo />
      <SignupForm />
    </PageLayout>
  );
};

export default index;
