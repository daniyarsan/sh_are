import React, { SVGProps } from 'react';

interface DotProps extends SVGProps<SVGSVGElement> {
  active?: boolean;
}

export default function Dot({ active = false, ...props }: DotProps) {
  return (
    <svg viewBox='0 0 14 14' xmlns='http://www.w3.org/2000/svg' {...props}>
      <circle
        cx={659}
        cy={7}
        r={5}
        transform='translate(-722 -844) translate(70 844)'
        stroke={`${active ? '#FFF' : '#126154'}`}
        strokeWidth={4}
        fill={`${active ? '#126154' : '#FFF'}`}
        fillRule='evenodd'
      />
    </svg>
  );
}
