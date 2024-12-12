import React from 'react';
import { Link } from '@inertiajs/react';
import Banner from '@/components/_elements/Banner';
import ProjectProgress from '@/components/progress/ProjectProgress';
import { Project } from '@/types';
import BannerMobile from '@/components/_elements/BannerMobile';
import ButtonLink from '@/components/_elements/ButtonLink';

export default function FeaturedCard({ project }: { project: Project }) {
  return (
    <section
      className={`w-full bg-primary text-white flex flex-col justify-between space-y-[2em] p-8`}>
      <div className='relative'>
        <Link href={`project/${project.slug}`}>
          {project.image_path && (
            <div className='hidden md:block'>
              <Banner image={`/storage/images/${project.image_path}`} />
            </div>
          )}

          {project.mobile_image_path && (
            <div className='md:hidden'>
              <BannerMobile
                image={`/storage/images/${project.mobile_image_path}`}
              />
            </div>
          )}
        </Link>
        {/*<div className='text-xs rounded-2xl bg-gray-600 text-white inline-block px-3 py-1 absolute top-2 left-2'>*/}
        {/*  {project.finished ? 'Завершено' : 'На очереди'} •{' '}*/}
        {/*  <VoteCounter className='text-xs' count={project?.votes?.length} />*/}
        {/*</div>*/}
      </div>

      <div className='flex-1'>
        <h3 className='mt-4'>{project?.name}</h3>
      </div>

      <div className='flex flex-col md:flex-row justify-between gap-10'>
        <div className='flex flex-col w-full'>
          <ProjectProgress unlim={true} featured={true} project={project} />
        </div>
        <div className='flex flex-col w-full md:w-6/12 bg-primaryLight rounded-2xl p-5'>
          <div className='flex flex-row gap-10 justify-around'>
            <div className='flex flex-col'>
              {project && project.invested?.short && (
                <>
                  <div className='text-xs'>Цель выполнена</div>
                  <div className='text-lg'>
                    <span>{project.invested.short}</span>
                  </div>
                </>
              )}
            </div>
            <div className='flex flex-col'>
              <div className='text-xs'>{project.done_text}</div>
              <div className='text-lg'>
                <span>{project.done_value}</span>{' '}
                <img className='inline mb-1' src='/assets/icons/man.svg' />
              </div>
            </div>
          </div>

          <ButtonLink
            href={
              project.custom_url
                ? project.custom_url
                : `project/${project.slug}`
            }
            className='bg-dark-900 text-white'>
              Read more
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
