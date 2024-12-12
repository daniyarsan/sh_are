import { Link } from '@inertiajs/react';
import ProjectProgress from '@/components/progress/ProjectProgress';
import ButtonLink from '@/components/_elements/ButtonLink';
import ActiveIndicator from '@/components/_elements/ActiveIndicator';
import { Project } from '@/types';
import React from 'react';
import BannerMobile from '@/components/_elements/BannerMobile';

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export default function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  return (
    <section
      className={`w-full bg-gray-100 flex flex-col justify-between space-y-[2em] rounded-2xl p-8`}>
      <div className='relative'>
        <Link href={`project/${project.slug}`}>
          {project.mobile_image_path && (
            <BannerMobile
              image={`/storage/images/${project.mobile_image_path}`}
            />
          )}
        </Link>

        <ActiveIndicator
          className='inline-block rounded-full px-3 py-1 absolute top-2 left-2 text-sm text-white'
          status={project.status}
        />
      </div>

      <div className='flex-1'>
        <h3 className='mt-4'>{project?.name}</h3>
      </div>

      <div className='flex flex-col md:flex-row justify-between gap-10'>
        <div className='flex flex-col w-full'>
          <ProjectProgress
            unlim={!!project.featured}
            featured={featured}
            project={project}
          />
        </div>
      </div>

      <div className='md:w-5/12 w-full'>
        <ButtonLink
          href={
            project.custom_url ? project.custom_url : `project/${project.slug}`
          }>
            Read more
        </ButtonLink>
      </div>
    </section>
  );
}
