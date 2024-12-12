import React from 'react';
import { Link } from '@inertiajs/react';

type NextProps = {
  href: string;
};

export default function Next({ href, ...props }: NextProps) {
  if (href) {
    return (
      <Link
        href={href}
        {...props}
        className='bg-gray-100 opacity-70 hover:opacity-100 rounded-full flex justify-center items-center p-4 cursor-pointer'>
        <img src={`/assets/icons/chevron-right.svg`} alt='' className='w-7' />
      </Link>
    );
  }

  return (
    <span
      {...props}
      className='bg-gray-100 opacity-70 hover:opacity-100 rounded-full flex justify-center items-center p-4 cursor-pointer'>
      <img src={`/assets/icons/chevron-right.svg`} alt='' className='w-7' />
    </span>
  );
}
