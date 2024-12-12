import * as React from 'react';
import { SVGProps } from 'react';

export default function Check(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 19 15' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M8.119 14.498a1.577 1.577 0 012.238 0l2.979 2.997 9.308-9.369a1.577 1.577 0 012.237 0c.62.623.62 1.63 0 2.252L14.753 20.572a2 2 0 01-2.837 0L8.119 16.75a1.598 1.598 0 010-2.252z'
        transform='translate(-37 -418) translate(30 411)'
        fill='#126154'
        fillRule='nonzero'
        stroke='none'
        strokeWidth={1}
      />
    </svg>
  );
}
