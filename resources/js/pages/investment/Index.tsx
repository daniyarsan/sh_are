import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Head } from '@inertiajs/react';
import InvestmetRequestFormWidget from '@/components/_widgets/InvestmetRequestFormWidget';
import { Project } from '@/types';

type Props = {
  currentProject: Project;
};

export default function Index({ currentProject }: Props) {
  const title = 'Contribute';

  return (
    <MainLayout>
      <Head title={title} />

      <section className='space-y-[4em] px-5'>
        <div className='my-10 md:my-20 space-y-10'>
          <h1>{title}</h1>
          <p className='text-lg md:w-8/12'>
            You can choose the amount to donate, select the subject to support,
            and provide details about the sender if desired.
          </p>
        </div>
        <InvestmetRequestFormWidget currentProject={currentProject} />
      </section>
    </MainLayout>
  );
}
