import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Head } from '@inertiajs/react';
import PaymentWidget from '@/components/_widgets/PaymentWidget';

export default function Payments() {
  const title = 'Ваши платежи';

  return (
    <MainLayout>
      <Head title={title} />

      <section className='space-y-10 px-5 my-10 md:my-20'>
        <div className='my-10 md:my-20 space-y-10'>
          <h1>{title}</h1>
          <p className='text-lg md:w-8/12'>
            На странице представлена история ваших платежей, а так же активные
            платежи и история отмененных.
          </p>
        </div>

        <PaymentWidget />
      </section>
    </MainLayout>
  );
}
