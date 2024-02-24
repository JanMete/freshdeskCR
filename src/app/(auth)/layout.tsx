import { redirect } from 'next/navigation';
import AuthTopBar from './AuthTopBar';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';


//todo wygląda jak kopia z docsów, ale jakbyś chciał prostsze typowanie childrenów to coś takiego próbuj const AuthLayout: FunctionComponent<PropsWithChildren> = ({children}) => {}
//
export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const superbase = createServerComponentClient<Database>({ cookies });
  const { data } = await superbase.auth.getSession();

  if (data.session) {
    redirect('/');
  }
  return (
    <>
      <AuthTopBar />
      {children}
    </>
  );
}
