import React from 'react';
import VoteButton from '@/components/vote/VoteButton';
import ButtonLink from '@/components/_elements/ButtonLink';
import { Link } from '@inertiajs/react';
import Banner from '@/components/_elements/Banner';
import { Project } from '@/types';
import BannerMobile from '@/components/_elements/BannerMobile';

const VoteCard = ({ project }: { project: Project }) => {
  return (
    <section className='relative flex flex-col justify-between space-y-[2em] rounded-2xl bg-gray-100 p-7'>
      <div className='w-10/12 md:w-auto'>
        <h3>{project?.name}</h3>
      </div>

      <div className='relative'>
        <Link href={`project/${project.slug}`}>
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
        </Link>
        {/*<div className='text-xs rounded-2xl bg-gray-600 text-white inline-block px-3 py-1 absolute top-2 left-2'>*/}
        {/*  {project.finished ? 'Завершено' : 'На очереди'} •{' '}*/}
        {/*  <VoteCounter className='text-xs' count={project?.votes?.length} />*/}
        {/*</div>*/}
      </div>
      <div className='my-6 text-sm'>
        Target • <span>{project.cost.formatted}</span>
      </div>

      <div className='flex flex-col md:flex-row md:space-x-5'>
        <ButtonLink
          href={`/project/${project.slug}`}
          className='bg-dark-900 text-white'>
            Read more
        </ButtonLink>

        <VoteButton project={project} />
      </div>
    </section>
  );
};

export default VoteCard;
