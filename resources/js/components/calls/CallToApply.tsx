import React from 'react';
import ButtonLink from '@/components/_elements/ButtonLink';
type CallToApplyProps = {
  text: string;
  href: string;
  buttonText: string;
};

const CallToApply = ({ text, href, buttonText }: CallToApplyProps) => {
  return (
    <div className='flex w-full flex-col rounded-2xl bg-primary p-8 md:flex-row justify-between gap-5'>
      <div className='flex flex-col w-full md:w-7/12'>
        <h3 className='text-lg md:text-2xl text-white'>{text}</h3>
      </div>

      <div className='w-full md:w-5/12 flex items-center justify-center'>
        <div className='w-full md:w-8/12'>
          <ButtonLink
            href={href}
            className='bg-dark-900 hover:bg-dark-700 text-white'>
            {buttonText}
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default CallToApply;
