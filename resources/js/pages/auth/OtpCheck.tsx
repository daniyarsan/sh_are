import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/layouts/MainLayout';
import OtpForm from '@/components/form/OtpForm';

export default function Login() {
  const title = 'Введите 2FA код';

  return (
    <MainLayout>
      <Head title={title} />

      <section className='px-5'>
        <div className='my-10 md:my-20 md:w-4/12 flex flex-col m-auto space-y-5'>
          <h3>{title}</h3>
          <OtpForm />
        </div>
      </section>
    </MainLayout>
  );
}
