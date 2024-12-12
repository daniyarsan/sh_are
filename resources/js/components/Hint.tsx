import React, { useState } from 'react';
import questionMark from '/public/assets/icons/question-mark.svg';
import clsx from 'clsx';

export default function Hint({ text }: { text: string }) {
  const [hidden, setHidden] = useState(true);

  return (
    <div className='relative text-white'>
      <span
        onMouseEnter={() => {
          setHidden(false);
        }}
        onMouseLeave={() => {
          setHidden(true);
        }}
        className='w-5 h-5 bg-primaryLight flex items-center justify-center rounded-full cursor-pointer'>
        <img className='size-3' src={questionMark} />
      </span>
      <div
        className={clsx(
          'absolute left-10 bg-primaryLight font-light p-2 rounded-2xl -top-5 w-[150px]',
          {
            visible: !hidden,
            hidden: hidden,
          },
        )}>
        {text}
      </div>
    </div>
  );
}
