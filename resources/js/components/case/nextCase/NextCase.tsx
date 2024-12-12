import Next from '@/components/_elements/controls/Next';
import NextCasePreview from '@/components/case/nextCase/NextCasePreview';
import { Application } from '@/types';
import React from 'react';

export default function NextCase({
  application,
}: {
  application: Application;
}) {
  return (
    <div className='flex flex-row gap-5 border-y py-10'>
      <NextCasePreview application={application} />

      <div className='flex flex-col space-y-5 flex-1'>
        <div className='text-sm uppercase text-gray-500'>Следующая история</div>
        <div className='font-medium text-lg'>{application.story_title}</div>
      </div>
      <div className=''>
        <Next href={route('case.one', application.id.toString())} />
      </div>
    </div>
  );
}
