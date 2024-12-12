import React from 'react';
import ClipboardCopy from '@/components/_elements/clipboard/ClipboardCopy';
import Copy from '@/components/_elements/icons/Copy/Copy';
import CompanyProgress from '@/components/progress/CompanyProgress';
import { Link } from '@inertiajs/react';
import { Company } from '@/types';

export default function RatingBlock({ companies }: { companies: Company[] }) {
  return companies.map((company) => {
    const wallet = company.address;
    return (
      <div key={company.id} className='mt-10 flex justify-center items-center'>
        <div className='w-3/12'>
          <Link href={`/company/${company.slug}`}>
            <h3 className='text-[28px]'>{company.name}</h3>
          </Link>

          {wallet && (
            <p>
              <span className='font-extralight'>
                {`${wallet?.substring(0, 20)}...${wallet?.substring(wallet.length - 5, wallet.length)}`}
              </span>
              <ClipboardCopy text={wallet}>
                <Copy className='inline size-[15px] cursor-pointer' />
              </ClipboardCopy>
            </p>
          )}
        </div>
        <div className='w-9/12'>
          <CompanyProgress company={company} />
        </div>
      </div>
    );
  });
}
