import React, { SVGProps } from 'react';

interface BulletProps extends SVGProps<SVGSVGElement> {
  active?: boolean;
}

export default function Bullet({ active = false, ...props }: BulletProps) {
  return (
    <svg viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg' {...props}>
      <circle
        cx={250}
        cy={1896}
        r={5}
        transform='translate(-245 -1891)'
        fill='#126154'
        stroke='none'
        strokeWidth={1}
        fillRule='evenodd'
      />
    </svg>
  );
}
