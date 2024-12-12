import React from 'react';

export default function IntroText({ children }: { children: React.ReactNode }) {
  return <p className='text-md font-medium md:text-lg'>{children}</p>;
}
