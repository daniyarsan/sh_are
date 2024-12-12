import { useEffect, useState } from 'react';
import { fetchApplicationsTotalInvested } from '@/components/_api/api.js';
import React from 'react';

export default function CaseInvestedCounter() {
  const [invested, setInvested] = useState(0);

  useEffect(() => {
    fetchApplicationsTotalInvested().then(({ formatted }) => {
      setInvested(formatted);
    });
  }, []);

  return (
    <>
      <img
        className='w-full md:block hidden'
        src='/storage/images/bottombrace.svg'
        alt=''
      />
      <div className='flex items-center justify-center border-t-2 border-gray-600 py-5 md:border-0'>
        <div className='flex flex-col space-y-[1em] text-center'>
          <h2 className='text-3xl'>{invested}</h2>
          <span className='text-md'>Total</span>
        </div>
      </div>
    </>
  );
}
