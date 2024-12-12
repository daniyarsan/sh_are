import React from 'react';

type Props = {
  imageUrl: string;
  text: string;
  username?: string | undefined;
};
export default function CaseDisplayRequest({
  imageUrl,
  text,
  username,
}: Props) {
  return (
    <div className='flex flex-row bg-light border border-gray-700 p-10 w-full mx-auto shadow-[20px_20px_10px_0px_rgba(100,100,100)]'>
      <div className='md:w-1/12 hidden md:block'>
        <img className='size-14 rounded-[40px] object-cover' src={imageUrl} />
      </div>
      <div className='flex flex-col md:w-11/12 text-md space-y-4'>
        {username && <div className='font-medium'>@{username}</div>}
        <div className='' dangerouslySetInnerHTML={{ __html: text }}></div>
        <div className='flex flex-row gap-6'>
          <div className='flex flex-row items-center justify-center gap-3'>
            <img src={`/assets/icons/like.svg`} alt='' className='size-5' />

            <span className='mt-1 text-gray-500'>15</span>
          </div>

          <div className='flex flex-row'>
            <img src={`/assets/icons/dislike.svg`} alt='' className='w-5' />
          </div>

          <div className='mt-1'>
            <span className='text-sm text-gray-500 uppercase'>Ответить</span>
          </div>
        </div>
      </div>
    </div>
  );
}
