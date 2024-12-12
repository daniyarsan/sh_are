import MainLayout from '@/layouts/MainLayout';
import { Head } from '@inertiajs/react';
import CallToApply from '@/components/calls/CallToApply';
import NextCase from '@/components/case/nextCase/NextCase';
import CaseDisplayRequest from '@/components/case/CaseDisplayRequest';
import { Application } from '@/types';
import ImagePreview from '@/components/image/ImagePreview';
import VideoPreview from '@/components/video/VideoPreview';
import React from 'react';

export default function One({
  application,
  next,
}: {
  application: Application;
  next: Application;
}) {
  const title = application.story_title;

  return (
    <MainLayout>
      <Head title={title} />

      <section className='px-5'>
        <div className='space-y-[5em] my-10 md:my-20 mt-5 md:mx-auto md:mb-10 md:w-10/12'>
          <h1 className='md:w-9/12'>{title}</h1>

          <CaseDisplayRequest
            imageUrl={`/storage/images/${application.avatar_path}`}
            text={application.story_request}
            username={application?.username}
          />

          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4`}>
            {application.videos.map((item, index) => {
              return <VideoPreview key={index} video={item} />;
            })}
          </div>

          {application.story_brief && (
            <div className='space-y-10'>
              <h3>Запрос</h3>
              <div className=''>
                <p>{application.story_brief}</p>
              </div>
            </div>
          )}

          <div className='space-y-10'>
            <h3>Наша помощь</h3>
            <div className=''>
              <p>{application.story_description}</p>
            </div>
          </div>

          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4`}>
            {application.images.map((item, index) => {
              return <ImagePreview key={index} image={item} />;
            })}
          </div>

          <CallToApply
            text='Считаете, что вам тоже нужна помощь?'
            buttonText='Написать письмо'
            href={route('application.index')}
          />

          <NextCase application={next} />
        </div>
      </section>
    </MainLayout>
  );
}

//
//     <motion.div
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
