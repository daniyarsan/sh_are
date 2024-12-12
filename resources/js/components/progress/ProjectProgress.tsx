import React from 'react';
import Dot from '@/components/_elements/icons/Dot';
import clsx from 'clsx';
import { Project } from '@/types';

type ProjectProgressType = {
  project: Project;
  featured?: boolean;
  unlim?: boolean;
};
export default function ProjectProgress({
  project,
  unlim = false,
  featured = false,
}: ProjectProgressType) {
  return (
    <div className='flex flex-col py-5'>
      <div className='hidden h-10 md:block'>
        {project?.shares?.length > 0 &&
          project.investedPercentage > 20 &&
          project.shares &&
          project.shares.map((share, index) => {
            return (
              <div
                key={index}
                style={{ width: `${share.percentage}%`, float: 'left' }}>
                <div className='text-center text-xs overflow-hidden text-ellipsis text-nowrap'>
                  {share.company_name} • {share.invested.short}
                </div>
                <div
                  className={clsx(
                    {
                      'border-white': featured,
                      'border-dark-700': !featured,
                    },
                    'h-4 rounded-full border-t-[1px]',
                  )}></div>
              </div>
            );
          })}
      </div>

      <div
        className='flex justify-end text-xs font-light md:hidden'
        style={{ width: `${project.investedPercentage}%` }}>
        <div className='translate-x-5 text-nowrap'>
          {project.investedPercentage > 20 && project.invested.short}
        </div>
      </div>

      <div
        className={clsx(
          {
            'bg-shadow': featured,
            'bg-gray-300': !featured,
          },
          'w-full mb-3 mt-2 h-2.5 rounded-full dark:bg-gray-700 md:mt-0',
        )}>
        <div
          className={clsx(
            {
              'bg-white': featured,
              'bg-shadow': !featured,
            },
            'relative flex h-2.5 items-center rounded-full dark:bg-white',
          )}
          style={{
            width: `${project.investedPercentage}%`,
          }}>
          <Dot
            className='absolute right-0 size-5 translate-x-3'
            active={featured}
          />
        </div>
      </div>

      <div className='relative mt-2 flex flex-row text-xs font-light'>
        <div className='absolute flex w-full flex-row justify-between'>
          <div className=''>0 ₽</div>
          <div className=''>
            {unlim
              ? project.investedPercentage < 80 && (
                  <span className='text-xl'>∞</span>
                )
              : project.investedPercentage < 80 && project.cost?.short}
          </div>
        </div>

        <div
          className='absolute hidden justify-end md:flex'
          style={{ width: `${project.investedPercentage}%` }}>
          <div className='translate-x-5 text-nowrap'>
            {project.investedPercentage > 20 && project.invested.short}
          </div>
        </div>
      </div>
    </div>
  );
}
