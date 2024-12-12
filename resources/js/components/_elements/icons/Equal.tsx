import * as React from 'react';
import { SVGProps } from 'react';

export default function Equal(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='23px'
      height='10px'
      viewBox='0 0 23 10'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <g fill='#126154' stroke='none' strokeWidth={1} fillRule='evenodd'>
        <path
          d='M11.004-9.906c.607 0 1.099.492 1.099 1.098v19.812a1.098 1.098 0 11-2.197 0V-8.808c0-.606.492-1.098 1.098-1.098z'
          transform='translate(-725 -2414) translate(245 2309) translate(51 20) translate(429.171 85.087) rotate(-90 11.004 1.098)'
        />
        <path
          d='M11.004-2.301c.607 0 1.099.491 1.099 1.098V18.61a1.098 1.098 0 11-2.197 0V-1.203c0-.607.492-1.098 1.098-1.098z'
          transform='translate(-725 -2414) translate(245 2309) translate(51 20) translate(429.171 85.087) rotate(-90 11.004 8.703)'
        />
      </g>
    </svg>
  );
}
