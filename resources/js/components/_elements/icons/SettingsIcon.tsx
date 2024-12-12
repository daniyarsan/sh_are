import React, { SVGProps } from 'react';

export default function SettingsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='15px'
      height='20px'
      viewBox='0 0 15 20'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M12.083 10.18c-.44 0-1.25-.07-1.25-.18v10h2.5V10c0 .11-.808.18-1.25.18m.695-7.905V0h-2.222v2.275c-1.112.43-2.223 1.575-2.223 2.933 0 1.726 1.493 3.125 3.334 3.125 1.84 0 3.333-1.399 3.333-3.125 0-1.358-1.111-2.503-2.222-2.933M4.167 10V0h-2.5v10a4.61 4.61 0 011.25-.18c.44 0 1.25.07 1.25.18m2.5 4.792c0 1.358-1.111 2.503-2.223 2.933V20H2.222v-2.275C1.112 17.295 0 16.15 0 14.792c0-1.726 1.492-3.125 3.333-3.125 1.841 0 3.334 1.399 3.334 3.125'
        transform='translate(-1002 -168) translate(982 159) translate(20 9)'
        fill='#FFF'
        fillRule='nonzero'
        stroke='none'
        strokeWidth={1}
      />
    </svg>
  );
}
