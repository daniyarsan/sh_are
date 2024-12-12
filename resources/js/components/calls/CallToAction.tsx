import React from 'react';
import funds from '../../../animations/funds.json';
import ButtonLink from '@/components/_elements/ButtonLink';
import Animate from "@/components/_elements/Animate";

type CallToActionProps = {
  text: string;
  href: string;
  buttonText: string;
};
const CallToAction = ({ text, href, buttonText }: CallToActionProps) => {
  return (
    <div className='flex w-full flex-col-reverse rounded-2xl bg-primary text-white md:flex-row py-8'>
      <div className='flex flex-col px-8 md:w-8/12 md:py-8 space-y-10'>
        <h3 className='text-lg md:text-2xl'>{text}</h3>

        <div className='w-full md:w-4/12'>
          <ButtonLink href={href} className='bg-dark-900 text-white'>
            {buttonText}
          </ButtonLink>
        </div>
      </div>

      <div className='relative items-center size-10 justify-center hidden md:w-4/12'>
      <Animate data={funds} />
      </div>
    </div>
  );
};

export default CallToAction;
