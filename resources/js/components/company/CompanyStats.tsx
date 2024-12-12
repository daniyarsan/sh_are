import Wallet from '@/components/_elements/Wallet';
import StatsWidget from '@/components/_elements/StatsWidget';
import { formatNoun } from '@/lib/utils.js';
import { Company } from '@/types';
import React from 'react';

export default function CompanyStats({ company }: { company: Company }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 divide-y md:divide-y-0'>
      <div className=''>
        <StatsWidget subTextSize='md' subText='Всего пожертвовано'>
          {company?.invested['formatted']}
        </StatsWidget>
      </div>
      <div className='pt-5 md:p-0'>
        <StatsWidget
          subTextSize='md'
          subText='Проспонсировано'>{`${company?.projectsCount} ${formatNoun(company?.projectsCount, 'проект', 'проекта', 'проектов')}`}</StatsWidget>
      </div>
      <div className='pt-5 md:p-0'>
        <StatsWidget subTextSize='md' subText='Дата вступления в Лигу'>
          {company.created_at}
        </StatsWidget>
      </div>
      <div className='pt-5 md:p-0'>
        <StatsWidget subTextSize='md' subText='Благотворительный кошелек'>
          {company.address && <Wallet wallet={company.address} />}
        </StatsWidget>
      </div>
    </div>
  );
}
