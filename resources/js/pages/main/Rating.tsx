import MainLayout from '@/layouts/MainLayout';
import { Head } from '@inertiajs/react';
import React from 'react';

export default function Rating() {
  const title = 'Рейтинг площадок';
  return (
    <MainLayout>
      <Head title={title} />

      <section className='px-5'>
        <div className='my-10 md:my-20'>
          <h1>{title}</h1>
        </div>
      </section>
    </MainLayout>
  );
}
