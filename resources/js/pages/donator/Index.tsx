import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Head } from '@inertiajs/react';
import DonatorsThreadWidget from '@/components/_widgets/DonatorsThreadWidget';

export default function Index() {
  const title = 'Рейтинг меценатов';

  return (
    <MainLayout>
      <Head title={title} />
      <section className='space-y-[5em] px-5'>
        <div className='my-10 md:my-20 space-y-10'>
          <h1>{title}</h1>
          <p className='text-lg md:w-8/12'>
            На данной странице представлен ТОП частных добродетелей, активно
            жертвующих средства в проекты Лиги.
          </p>
        </div>

        <DonatorsThreadWidget />
      </section>
    </MainLayout>
  );
}
