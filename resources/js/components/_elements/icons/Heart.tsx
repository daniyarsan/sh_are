import * as React from 'react';
import { SVGProps } from 'react';

export default function Heart(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='40px'
      height='34px'
      viewBox='0 0 40 34'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M0 11.558c0 9.604 8.039 14.722 13.923 19.304C16 32.478 18 34 20 34s4-1.522 6.077-3.138C31.96 26.28 40 21.162 40 11.558S29-4.857 20 4.376C11-4.857 0 1.954 0 11.558z'
        transform='translate(-565 -1634) translate(245 1008) translate(142 47) translate(0 579) translate(178)'
        fill='#126154'
        fillRule='nonzero'
        stroke='none'
        strokeWidth={1}
      />
    </svg>
  );
}
