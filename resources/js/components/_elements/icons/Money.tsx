import * as React from 'react';
import { SVGProps } from 'react';

export default function Money(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M22.076 0v14.717m0-14.717l-6.132 6.132M22.076 0l6.132 6.132M6.925 14.718a4.906 4.906 0 11-6.924 6.924m6.924-6.924h5.339m-5.339 0c-2.145.007-3.322.063-4.246.534a4.906 4.906 0 00-2.144 2.144c-.471.925-.527 2.101-.534 4.247m0 0L0 22.567v14.66m0 0a4.906 4.906 0 116.924 6.924M.002 37.227c.007 2.146.063 3.322.534 4.247a4.905 4.905 0 002.144 2.144c.924.47 2.1.527 4.246.533m0 0l.924.001h29.378m6.925-6.924a4.906 4.906 0 10-6.925 6.923m6.925-6.923V22.567l-.001-.924m.001 15.585c-.007 2.145-.064 3.321-.535 4.246a4.905 4.905 0 01-2.144 2.144c-.924.47-2.1.527-4.246.533m6.924-22.508a4.906 4.906 0 11-6.924-6.924m6.924 6.924c-.007-2.146-.063-3.322-.534-4.247a4.905 4.905 0 00-2.144-2.144c-.924-.47-2.1-.527-4.246-.534m0 0h-5.339m-4.906 14.717a4.906 4.906 0 11-9.812 0 4.906 4.906 0 019.812 0z'
        transform='translate(-560 -1234) translate(245 1008) translate(142 47) translate(0 181.676) translate(175.709)'
        stroke='#126154'
        strokeWidth={4.90577547}
        fill='none'
        fillRule='evenodd'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
