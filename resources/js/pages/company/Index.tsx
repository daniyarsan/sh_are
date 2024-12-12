import MainLayout from '@/layouts/MainLayout';
import { Head, usePage } from '@inertiajs/react';
import CompaniesRatingWidget from '@/components/_widgets/CompaniesRatingWidget';
import CallToAction from '@/components/calls/CallToAction';
import { PageProps } from '@/types';
import React from 'react';

export default function Index() {
  const title = 'Rating';

  const { auth } = usePage<PageProps>().props;

  return (
    <MainLayout>
      <Head title={title} />

      <section className='space-y-[4em] px-5'>
        <div className='my-10 md:my-20 space-y-10'>
          <h1>{title}</h1>
          <p className='text-lg md:w-8/12'>
           Full list of people who share
          </p>
        </div>

        <CompaniesRatingWidget />

        {!auth.user && (
          <CallToAction
            text={
              'Join us and be one, who support other people.'
            }
            href={'/register'}
            buttonText={'Register'}
          />
        )}
      </section>
    </MainLayout>
  );
}
