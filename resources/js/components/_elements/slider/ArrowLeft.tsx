import React, { SVGProps } from 'react';

export default function ArrowLeft(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='10px'
      height='9px'
      viewBox='0 0 10 9'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M33.297 28.5l-9-4.5v9l9-4.5z'
        transform='translate(-1025 -1220) translate(1003 1196) matrix(-1 0 0 1 55.782 0)'
        fill='#13171E'
        fillRule='nonzero'
        stroke='none'
        strokeWidth={1}
      />
    </svg>
  );
}
