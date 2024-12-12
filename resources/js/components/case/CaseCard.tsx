import ButtonLink from '@/components/_elements/ButtonLink';
import VideoPreview from '@/components/video/VideoPreview';
import { Application } from '@/types';
import React from 'react';

export default function CaseCard({
  application,
}: {
  application: Application;
}) {
  return (
    <div className='flex flex-col bg-gray-100 rounded-2xl p-7 space-y-5 mb-5'>
      {application.videos.length > 0 && application.videos[0] && (
        <VideoPreview video={application.videos[0]} />
      )}

      <div className='text-lg font-medium h-[60px]'>
        {application.story_title}
      </div>

      <div className=''>
        <span className='text-primary text-lg font-medium uppercase mr-3'>
          {application.invested.formatted}
        </span>
        <span className='text-sm text-gray-400'>/ пожертвовано</span>
      </div>

      <div className='flex flex-row gap-5'>
        <div className='bg-gray-200 rounded-lg px-2 justify-center py-1 text-md text-accent uppercase line-clamp-1 text-wrap'>
          {application?.company?.name}
        </div>
        <div className='bg-gray-200 text-light-xs rounded-lg w-6/12 flex items-center justify-center py-1 font-semibold  text-xs'>
          {application.created_at}
        </div>
      </div>

      <div className='space-y-3 flex-1'>
        <p className='text-md font-light'>
          {application.story_brief &&
            application.story_brief?.substring(0, 70) + '...'}
        </p>
      </div>

      <ButtonLink
        href={route('case.one', application.id.toString())}
        className='bg-dark-900 text-white'>
        Read more
      </ButtonLink>
    </div>
  );
}

// <video
//     src={`/storage/videos/${item.filepath}`}
//     width='1440'
//     height='680'
//     controls
// />
