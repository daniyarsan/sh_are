import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function CompanyCardLoading() {
  return (
    <div className='bg-semiLight rounded-2xl py-10'>
      <div className='grid min-h-[30vh] grid-cols-1 divide-gray-300 md:grid-cols-3 md:divide-x'>
        <div className='flex flex-col justify-center items-center md:text-center space-y-7 px-10'>
          <Skeleton className='size-36 rounded-full' />
          <div className='flex flex-col gap-5 justify-end items-center w-8/12'>
            <Skeleton className='h-4 w-full' />
            <Skeleton className='h-4 w-full' />
            <Skeleton className='h-4 w-full' />
          </div>
        </div>
        <div className='flex flex-col justify-center col-span-2 px-10 md:px-16 bg-light-xl md:bg-transparent py-10 rounded-2xl md:rounded-none space-y-10'>
          <div className='gap-5 flex flex-col'>
            <Skeleton className='h-4 w-full' />
            <Skeleton className='h-4 w-full' />
            <Skeleton className='h-4 w-full' />
            <Skeleton className='h-4 w-full' />
          </div>
          <div className=''>
            <Skeleton className='h-10 w-full' />
          </div>
        </div>
      </div>
    </div>
  );
}
