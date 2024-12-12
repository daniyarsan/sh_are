import MainLayout from '@/layouts/MainLayout';
import BackButton from '@/components/_elements/BackButton';
import ActiveIndicator from '@/components/_elements/ActiveIndicator';
import Banner from '@/components/_elements/Banner';
import BannerMobile from '@/components/_elements/BannerMobile';

import VoteButton from '@/components/vote/VoteButton';
import InvestingIndicator from '@/components/InvestingIndicator';
import { Head } from '@inertiajs/react';
import CallToAction from '@/components/calls/CallToAction';
import ProjectInvestmentsTable from '@/components/ProjectInvestmentsTable';
import { Project } from '@/types';
import React from 'react';

export default function One({ project }: { project: Project }) {
  const title = project.name;

  return (
    <MainLayout>
      <Head title={title} />

      <section className='space-y-10 px-5'>
        <div className='md:mx-auto md:w-9/12'>
          <BackButton className='my-10 block cursor-pointer text-gray-500'>{`< Назад`}</BackButton>
          <h1>{project.name}</h1>
          <div className='mt-5'>
            <ActiveIndicator
              className='inline-block rounded-full px-4 py-2 text-sm text-white'
              status={project.status}
            />
          </div>
        </div>

        <div className='py-10 md:my-20'>
          {project.image_path && (
            <div className='hidden md:block'>
              <Banner image={`/storage/images/${project.image_path}`} />
            </div>
          )}

          {project.mobile_image_path && (
            <div className='md:hidden'>
              <BannerMobile image={`/storage/images/${project.image_path}`} />
            </div>
          )}
        </div>

        <div className='space-y-16 md:m-auto md:w-9/12'>
          <div
            className='space-y-12'
            dangerouslySetInnerHTML={{ __html: project.content }}></div>
          {project.new && !project.finished && (
            <div className='md:w-6/12 m-auto'>
              <VoteButton project={project} />
            </div>
          )}
          {!project.new && !project.finished && (
            <>
              <CallToAction
                text='Вступайте в ряды Выдающихся Джентльменов. Поддержите данный проект Лиги.'
                href={route('investment.index', project.slug)}
                buttonText={'Поддержать'}
              />
            </>
          )}
          <InvestingIndicator
            heading={
              project.finished ? 'Собрано всего:' : 'Собрано на данный момент:'
            }
            project={project}
            featured={true}
          />
          <ProjectInvestmentsTable project={project} />
        </div>
      </section>
    </MainLayout>
  );
}
