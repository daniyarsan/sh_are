import React from 'react';
import RatingBlock from '@/components/rating/RatingBlock';
import RatingBlockMobile from '@/components/rating/RatingBlockMobile';
import { Company } from '@/types';

export default function Rating({ companies }: { companies: Company[] }) {
  return (
    <div>
      <div className='hidden md:block'>
        <RatingBlock companies={companies} />
      </div>
      <div className='flex flex-col divide-y-2 md:hidden'>
        <RatingBlockMobile companies={companies} />
      </div>
    </div>
  );
}
