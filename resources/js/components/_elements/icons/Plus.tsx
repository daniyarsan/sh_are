import React, { SVGProps } from 'react';

export default function Plus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='23px'
      height='23px'
      viewBox='0 0 23 23'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <g
        transform='translate(-423 -2408) translate(245 2309) translate(51 20) translate(127.82 79.172)'
        stroke='none'
        strokeWidth={1}
        fillRule='evenodd'>
        <rect
          x={9.90394737}
          y={0}
          width={2.20087719}
          height={21.9687368}
          rx={1.1004386}
        />
        <path
          d='M11.004-.02c.607 0 1.099.492 1.099 1.098V20.89a1.098 1.098 0 11-2.197 0V1.078c0-.606.492-1.098 1.098-1.098z'
          transform='rotate(-90 11.004 10.984)'
        />
      </g>
    </svg>
  );
}
