import React from 'react';
import ClipboardCopy from '@/components/_elements/clipboard/ClipboardCopy';
import Copy from '@/components/_elements/icons/Copy/Copy';
import CompanyProgressMobile from '@/components/progress/CompanyProgressMobile';
import { Company } from '@/types';

export default function RatingBlockMobile({
  companies,
}: {
  companies: Company[];
}) {
  return companies.map((company) => {
    const wallet = company?.address;
    return (
      <div key={company.id} className='my-5 flex flex-col py-5'>
        <div className='my-2 flex flex-row flex-wrap items-center justify-between'>
          <h3 className='text-[28px]'>{company.name}</h3>
          {wallet && (
            <p className='flex flex-row'>
              <span className='mr-2 text-ellipsis'>
                {`${wallet?.substring(0, 20)}...${wallet?.substring(wallet.length - 5, wallet.length)}`}{' '}
              </span>
              {wallet && (
                <ClipboardCopy text={wallet}>
                  <Copy className='inline size-3 cursor-pointer' />
                </ClipboardCopy>
              )}
            </p>
          )}
        </div>
        <CompanyProgressMobile company={company} />
      </div>
    );
  });
}
