import React from 'react';
import ClipboardCopy from '@/components/_elements/clipboard/ClipboardCopy';
import CopyGreen from '@/components/_elements/icons/Copy/CopyGreen';

type CopyTokenProps = {
  toCopy: string;
  children?: React.ReactNode;
};

export default function CopyToken({ toCopy, children }: CopyTokenProps) {
  return (
    <div className='bg-gray-100 rounded-2xl p-6 flex flex-row justify-between'>
      {children}
      <ClipboardCopy text={toCopy}>
        <CopyGreen className='cursor-pointer' />
      </ClipboardCopy>
    </div>
  );
}
