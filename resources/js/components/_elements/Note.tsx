import React from 'react';

export default function Note({ children }: { children: React.ReactNode }) {
  return (
    <p className='border-l-4 border-l-primary px-5 text-md font-medium md:text-lg'>
      {children}
    </p>
  );
}
