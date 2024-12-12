import * as React from 'react';
import { SVGProps } from 'react';

export default function RoundedUsers(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 77 77' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g
        transform='translate(-472 -2381) translate(245 2309) translate(51 20) translate(150.675 52.134) translate(25.395)'
        stroke='none'
        strokeWidth={1}
        fill='none'
        fillRule='evenodd'>
        <ellipse
          fill='#126154'
          cx={38.0921053}
          cy={38.0228137}
          rx={38.0921053}
          ry={38.0228137}
        />
        <g transform='translate(15.237 20.279)'>
          <path
            d='M14.739 3.38c-3.566 0-6.569 3.064-6.569 6.703 0 3.639 3.003 6.703 6.569 6.703s6.569-3.064 6.569-6.703c0-3.639-3.003-6.703-6.57-6.703zm16.891 0c-3.566 0-6.568 3.064-6.568 6.703 0 3.639 3.002 6.703 6.568 6.703s6.57-3.064 6.57-6.703c0-3.639-3.004-6.703-6.57-6.703zM14.74 20.617c-9.197 0-12.2 7.66-12.2 7.66v3.831h24.4v-3.83s-3.004-7.661-12.2-7.661zm16.891 0c-2.815 0-5.067.766-6.756 1.724 2.627 2.298 3.753 4.98 3.941 5.17l.188.384v4.213h15.015v-3.83c-.188 0-3.191-7.661-12.388-7.661z'
            fill='#FFF'
            fillRule='nonzero'
          />
          <path d='M0 0H45.7105263V32.1081538H0z' />
        </g>
      </g>
    </svg>
  );
}
