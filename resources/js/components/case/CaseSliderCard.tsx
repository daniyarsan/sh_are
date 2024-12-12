import ButtonLink from '@/components/_elements/ButtonLink';
import { Application } from '@/types';

export default function CaseSliderCard({
  application,
}: {
  application: Application;
}) {
  return (
    <div className='flex flex-col bg-gray-100 rounded-2xl p-7 space-y-5 mb-5 min-h-[500px]'>
      <div className='space-y-3 flex-1'>
        <div className='text-lg font-medium'>{application.story_title}</div>
        <p className='text-md font-light'>
          {application.story_brief &&
            application.story_brief?.substring(0, 240) + '...'}
        </p>
      </div>

      <div className='font-semibold text-primary text-sm uppercase'>
        Пожертвовано: {application.invested.formatted}
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
