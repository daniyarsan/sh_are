import React from 'react';
import ProjectProgress from '@/components/progress/ProjectProgress';
import { Project } from '@/types';

type InvestingIndicatorProps = {
  heading: string;
  project: Project;
  featured: boolean;
};

export default function InvestingIndicator({
  heading,
  project,
  featured,
}: InvestingIndicatorProps) {
  return (
    <section
      className={`w-full ${featured ? 'bg-primary' : 'bg-gray-100'} relative rounded-2xl p-7 ${featured ? 'text-white' : ''} flex flex-col space-y-[1em]`}>
      <h3 className='text-lg font-medium'>{heading}</h3>
      <ProjectProgress project={project} featured={featured} />
    </section>
  );
}
