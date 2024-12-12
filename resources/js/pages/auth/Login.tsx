import React from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/layouts/MainLayout';
import LoginForm from '@/components/form/LoginForm';
import ButtonLink from '@/components/_elements/ButtonLink';

export default function Login() {
  const title = 'Login';

  return (
    <MainLayout>
      <Head title={title} />

      <section className='px-5'>
        <div className='my-10 md:my-20 md:w-4/12 flex-col m-auto items-center justify-center space-y-10'>
          <h3>{title}</h3>
          <LoginForm />

          <div className='flex flex-col space-y-5'>
            <ButtonLink href='/register'>Register</ButtonLink>

            {/*<Link href='/forgot' className='text-primary text-sm text-center'>*/}
            {/*  Forgot*/}
            {/*</Link>*/}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
