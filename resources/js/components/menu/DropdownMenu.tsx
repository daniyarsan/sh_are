import React, { useState } from 'react';

export default function Dropdown({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
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
          <ul
            className='py-2 text-sm text-gray-700 dark:text-gray-200'
            aria-labelledby='dropdownInformationButton'>
            <li>
              <a
                href='#'
                className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                Dashboard
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                Settings
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                Earnings
              </a>
            </li>
          </ul>
          <div className='py-2'>
            <a
              href='#'
              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
              Sign out
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
