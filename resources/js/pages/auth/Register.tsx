import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/layouts/MainLayout';
import RegistrationForm from '@/components/form/RegistrationForm';

export default function Register() {
  const title = 'Register';

  return (
    <MainLayout>
      <Head title={title} />

      <section className='px-5'>
        <div className='my-10 md:my-20 md:w-4/12 flex-col m-auto items-center justify-center space-y-10'>
          <h3>{title}</h3>
          <RegistrationForm />
        </div>
      </section>
    </MainLayout>
  );
}
