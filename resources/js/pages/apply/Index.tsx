import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Head } from '@inertiajs/react';
import ApplyFormWidget from '@/components/_widgets/ApplyFormWidget';
import CaseCarouselWidget from '@/components/_widgets/CaseCarouselWidget';

export default function Index() {
  const title = 'Help desk';

  return (
    <MainLayout>
      <Head title={title} />

      <section className='space-y-[6em] px-5'>
        <div className='my-10 md:my-20 space-y-10'>
          <h1>{title}</h1>
          <p className='text-lg md:w-8/12'>
           You are experiencing troubles. Please write message.
          </p>
        </div>

        <ApplyFormWidget />

        <CaseCarouselWidget />
      </section>
    </MainLayout>
  );
}

// <motion.div
//     className='box'
//     animate={{
//         scale: [1, 1, 1, 1, 0],
//         rotate: [0, 180, 180, 180, 0],
//         translate: ['0 -50%', '-0 -500%', '0 -50%', '0 -50%', 0],
//         borderRadius: ['0%', '30%', '50%', '50%', '0%'],
//     }}
//     transition={{
//         duration: 4,
//         ease: 'easeInOut',
//         times: [0, 0.2, 0.5, 0.8, 1],
//         repeatDelay: 2,
//     }}>
//
// </motion.div>
