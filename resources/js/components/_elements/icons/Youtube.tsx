import * as React from 'react';
import { SVGProps } from 'react';

export default function Youtube(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 21 15' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M8.388 10.27V4.259c2.092 1.005 3.712 1.975 5.628 3.02-1.58.895-3.536 1.898-5.628 2.993m11.658-9.004C19.685.782 19.07.405 18.415.28c-1.924-.373-13.93-.374-15.854 0A2.77 2.77 0 001.167 1C-.525 2.603.005 11.198.413 12.59c.171.603.393 1.038.672 1.323.36.377.853.637 1.419.753 1.584.335 9.747.522 15.878.05a2.732 2.732 0 001.459-.761c1.564-1.597 1.458-10.675.205-12.688'
        transform='translate(-906 -6641) translate(-9 6528) translate(915 113)'
        fillRule='nonzero'
        stroke='none'
        strokeWidth={1}
      />
    </svg>
  );
}
