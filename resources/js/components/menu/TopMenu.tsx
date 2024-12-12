import React from 'react';
import { usePage } from '@inertiajs/react';
import MenuItem from '@/components/menu/MenuItem';
import { PageProps } from '@/types';

const TopMenu = () => {
  const { menu } = usePage<PageProps>().props;

  return (
    <div
      className={`border-1 hidden w-auto items-center justify-between md:flex`}>
      <ul className='flex flex-row space-x-8 rounded-lg  p-4 text-sm'>
        {menu.map((item, index) => {
          return <MenuItem key={index} text={item.text} href={item.href} />;
        })}
      </ul>
    </div>
  );
};
export default TopMenu;
