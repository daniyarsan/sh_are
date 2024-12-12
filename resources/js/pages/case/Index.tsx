import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Head } from '@inertiajs/react';
import CasesThreadWidget from '@/components/_widgets/CasesThreadWidget';

export default function Index() {
  const title = 'Помощь обычным людям';

  return (
    <MainLayout>
      <Head title={title} />
      <section className='space-y-[5em] px-5'>
        <div className='my-10 md:my-20 space-y-10'>
          <h1>{title}</h1>
          <p className='text-lg md:w-8/12'>
            Счастье – это притча, а несчастье – история <br />
            <span className='text-gray-400'>(с) Харуки Мураками</span>
          </p>
        </div>

        <CasesThreadWidget />
      </section>
    </MainLayout>
  );
}
