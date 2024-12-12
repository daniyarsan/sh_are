import React from 'react';
import { Application } from '@/types';

export default function NextCasePreview({
  application,
}: {
  application: Application;
}) {
  return (
    <div className='relative size-24'>
      {application.videos[0]?.preview_path && (
        <img
          className='h-full w-full object-cover rounded-2xl'
          src={`/storage/videos/thumb/${application.videos[0].preview_path}`}
        />
      )}
    </div>
  );
}
