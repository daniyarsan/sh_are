import * as React from 'react';
import { SVGProps } from 'react';

export default function Nano(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='46px'
      height='46px'
      viewBox='0 0 50 50'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M34.5 40.889a6.389 6.389 0 100-12.778 6.389 6.389 0 000 12.778zM17.889 5.11L23 0M11.5 17.889a6.389 6.389 0 100-12.778 6.389 6.389 0 000 12.778zm1.278 15.333l20.444-20.444M6.39 46a6.389 6.389 0 100-12.778 6.389 6.389 0 000 12.778zM39.61 12.778a6.389 6.389 0 100-12.778 6.389 6.389 0 000 12.778zM23 46l5.111-5.111'
        transform='translate(-243 -1278) translate(245 1280)'
        stroke='#126154'
        strokeWidth={4}
        fill='none'
        fillRule='evenodd'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
