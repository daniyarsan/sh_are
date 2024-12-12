import React, { useRef } from 'react';

type ProgressBarProps = {
  timer: string;
  percentage: number;
};

export default function Progressbar({ timer, percentage }: ProgressBarProps) {
  const progressRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={progressRef}
      className='w-[60%] absolute z-50 bottom-[10%] flex flex-row items-center gap-5'>
      <div className='cursor-pointer h-2 bg-neutral-200 dark:bg-neutral-600 rounded-2xl flex-1 w-[100%] relative'>
        <div
          className='h-2 bg-primary absolute'
          style={{ width: percentage + '%' }}></div>
      </div>

      <div className='text-white w-2/12 text-sm text-center'>{timer}</div>
    </div>
  );
}
