import React from 'react';
import Dot from '@/components/_elements/icons/Dot';
import { Company, IndustryShare } from '@/types';

export default function CompanyProgress({
  company,
  dark = false,
}: {
  company: Company;
  dark?: boolean;
}) {
  return (
    <div className='flex flex-col py-5'>
      <div className='hidden h-10 md:flex'>
        {company?.shares.map((share: IndustryShare, index) => {
          return (
            <div key={index} style={{ width: `${share.percentage}%` }}>
              <div className='w-full text-center text-xs'>
                <div className='w-[100%] overflow-hidden text-ellipsis text-nowrap'>
                  {share.industry.name} • {share.amount.short}
                </div>
              </div>
              <div
                className={`h-4 rounded-full border-t-[1px] ${dark ? 'border-white' : 'border-default'} dark:bg-gray-700`}></div>
            </div>
          );
        })}
      </div>

      <div
        className='flex justify-end text-xs font-light md:hidden'
        style={{ width: `100%` }}>
        <div className='translate-x-5 text-nowrap'>
          {company.invested.short}
        </div>
      </div>

      <div
        className={`w-full ${dark ? 'bg-shadow' : 'bg-gray-300'} mb-3 mt-2 h-2.5 rounded-full dark:bg-gray-700 md:mt-0`}>
        <div
          className={`${dark ? 'bg-white' : 'bg-shadow'} relative flex h-2.5 items-center rounded-full dark:bg-white`}
          style={{
            width: `100%`,
          }}>
          <Dot
            className='absolute right-0 size-5 translate-x-3'
            active={dark}
          />
        </div>
      </div>

      <div className='relative mt-2 flex flex-row text-xs font-light'>
        <div className='absolute flex w-full flex-row justify-between'>
          <div className=''>0 ₽</div>
        </div>

        <div
          className='absolute hidden justify-end md:flex'
          style={{ width: `100%` }}>
          <div className='translate-x-5 text-nowrap'>
            {company.invested['short']}
          </div>
        </div>
      </div>
    </div>
  );
}
