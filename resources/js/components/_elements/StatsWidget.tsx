import clsx from 'clsx';
import React from 'react';

type Props = {
  subText: string;
  subTextSize?: 'xs' | 'sm' | 'md';
  children?: React.ReactNode;
};
export default function StatsWidget({
  subText,
  subTextSize = 'xs',
  children,
}: Props) {
  return (
    <div className='flex flex-col space-y-[1em]'>
      <h3 className='text-primary'>{children}</h3>
      <span
        className={clsx({
          'text-xs': subTextSize === 'xs',
          'text-sm': subTextSize === 'sm',
          'text-md': subTextSize === 'md',
        })}>
        {subText}
      </span>
    </div>
  );
}
