import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { MenuItem } from '@/types';

type DropdownProfileProps = {
  children: React.ReactNode;
  menuList: MenuItem[];
};

export default function DropdownProfile({
  children,
  menuList,
}: DropdownProfileProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative inline-block'>
      <div
        onClick={() => {
          toggle();
        }}
        className='cursor-pointer'>
        {children}
      </div>

      {isOpen && (
        <div className='absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600'>
          {/*<div className='px-4 py-3 text-sm text-gray-900 dark:text-white'>*/}
          {/*  <div>Bonnie Green</div>*/}
          {/*  <div className='font-medium truncate'>{auth.user.login}</div>*/}
          {/*</div>*/}
          <ul className='py-2 text-sm text-gray-700 dark:text-gray-200'>
            {menuList.map((item, index) => {
              return (
                <Link
                  key={index}
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  href={item.href}>
                  {item.text}
                </Link>
              );
            })}
          </ul>
          <div className='py-2'>
            <span className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
              <Link
                href={route('logout')}
                method='post'
                as='button'
                className='block w-full text-left text-sm'>
                Выход
              </Link>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
