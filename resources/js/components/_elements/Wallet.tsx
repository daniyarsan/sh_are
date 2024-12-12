import { CopyToClipboard } from 'react-copy-to-clipboard';
import { showToast } from '@/lib/showToast';
import React, { SVGProps } from 'react';

type WalletProps = {
  wallet: string;
};

export default function Wallet({ wallet, ...props }: WalletProps) {
  return (
    <span {...props}>
      {`${wallet.slice(0, 6)}......${wallet.slice(-8, -1)}`}
      <CopyToClipboard
        text={wallet}
        onCopy={() => {
          showToast('success', <span>Скопировано</span>);
        }}>
        <ClipboardIcon className='inline cursor-pointer' />
      </CopyToClipboard>
    </span>
  );
}

function ClipboardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='23px'
      height='22px'
      viewBox='0 0 23 22'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M10.7 3a2.2 2.2 0 00-2.2 2.2v2.2h2.2V5.2h12.1v12.1h-2.2v2.2h2.2a2.2 2.2 0 002.2-2.2V5.2A2.2 2.2 0 0022.8 3H10.7zM5.2 8.5A2.2 2.2 0 003 10.7v12.1A2.2 2.2 0 005.2 25h12.1a2.2 2.2 0 002.2-2.2V10.7a2.2 2.2 0 00-2.2-2.2H5.2z'
        transform='translate(-1033 -565) translate(40 542) translate(755.88 20) translate(235)'
        fill='#126154'
        fillRule='nonzero'
        stroke='none'
        strokeWidth={1}
      />
    </svg>
  );
}
