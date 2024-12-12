import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import ProjectCard from '@/components/projectCard/ProjectCard';
import { Head } from '@inertiajs/react';
import { Project } from '@/types';

type Props = {
  finished: Project[];
  fresh: Project[];
};

export default function Index({ finished, fresh }: Props) {
  const title = 'Projects';

  return (
    <MainLayout>
      <Head title={title} />

      <section className='px-5'>
        <div className='my-10 md:my-20'>
          <h1>{title}</h1>
        </div>

        {/*<div className='mt-5 grid grid-cols-1 gap-4 md:grid-cols-2'>*/}
        {/*  {current.data.map((project) => {*/}
        {/*    return <ProjectCard key={project.id} project={project} />;*/}
        {/*  })}*/}
        {/*</div>*/}

        <div className='my-10 md:my-20'>
          <h2>Done</h2>
        </div>
        <div className='mt-5 grid grid-cols-1 gap-4 md:grid-cols-2'>
          {finished.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </div>

        <div className='my-10 md:my-20'>
          <h2>Voting</h2>
        </div>
        <div className='mt-5 grid grid-cols-1 gap-4 md:grid-cols-2'>
          {fresh.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </div>
      </section>
    </MainLayout>
  );
}
