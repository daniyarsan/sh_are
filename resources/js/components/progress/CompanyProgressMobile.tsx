import React from 'react';
import StatsWidget from '@/components/_elements/StatsWidget';
import { Company, IndustryShare } from '@/types';

export default function CompanyProgressMobile({
  company,
}: {
  company: Company;
}) {
  return (
    <div className='flex flex-col space-y-[2em]'>
      <div className='my-3 grid grid-cols-3'>
        {company?.shares.map((share: IndustryShare, index) => {
          return (
            <div
              key={index}
              className='m-2 flex flex-col items-center justify-center rounded-[20px] bg-slate-100 p-3'>
              <img
                className='w-[40px]'
                src={`/assets/icons/industry${share.industry.id}.svg`}
              />
              <div className='mt-4 text-center text-sm font-light'>
                {share.amount.short}
              </div>
            </div>
          );
        })}
      </div>

      <StatsWidget subText='Всего пожертвовано'>
        {company.invested['formatted']}
      </StatsWidget>
    </div>
  );
}
