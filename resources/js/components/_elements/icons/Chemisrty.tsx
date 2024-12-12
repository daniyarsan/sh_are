import * as React from 'react';
import { SVGProps } from 'react';

export default function Chemisrty(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 34 46'
      width='46px'
      height='46px'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <g fill='#126154' stroke='none' strokeWidth={1} fillRule='evenodd'>
        <path
          d='M13 33a2 2 0 100-4 2 2 0 000 4zM23 36a2 2 0 11-4 0 2 2 0 014 0z'
          fillRule='nonzero'
          transform='translate(-251 -1426) translate(251 1426)'
        />
        <path
          d='M23.375 4.182v9.58C29.605 16.241 34 22.251 34 29.271 34 38.512 26.389 46 17 46S0 38.511 0 29.273c0-7.02 4.395-13.03 10.625-15.512v-9.58H8.5c-1.174 0-2.125-.935-2.125-2.09C6.375.936 7.326 0 8.5 0h17c1.174 0 2.125.936 2.125 2.09 0 1.156-.951 2.092-2.125 2.092h-2.125zM12.22 17.638l1.327-.53a2.091 2.091 0 001.328-1.937V4.18h4.25v10.99c0 .852.525 1.618 1.328 1.938l1.327.529a12.778 12.778 0 014.724 3.271H7.496a12.777 12.777 0 014.724-3.271zM4.975 25.09a12.347 12.347 0 00-.725 4.182C4.25 36.2 9.958 41.818 17 41.818s12.75-5.617 12.75-12.545c0-1.466-.255-2.874-.725-4.182H4.975z'
          transform='translate(-251 -1426) translate(251 1426)'
        />
      </g>
    </svg>
  );
}
