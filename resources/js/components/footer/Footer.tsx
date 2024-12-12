import { Link, usePage } from '@inertiajs/react';
import youtube from '../../../images/icons/youtube.svg';
import telegram from '../../../images/icons/telegram.svg';
import logo from '../../../images/logo/logo.png';
import { PageProps } from '@/types';
import React from 'react';

export default function Footer() {
  const { menu } = usePage<PageProps>().props;

  return (
    <footer className='mt-auto hidden bg-dark-900 text-white md:block'>
      <div className='m-auto max-w-screen-xl'>
        <div className='grid min-h-[30vh] grid-cols-1 divide-y divide-gray-700 md:grid-cols-3 md:divide-x'>
          <div className='flex items-start justify-start py-10 pl-5 md:col-span-1'>
            <Link href='/'>
              <img className='h-[60px] fill-white' src={logo} alt='' />
            </Link>
          </div>

          <div className='leading-12 grid grid-cols-1 items-start justify-end py-10 pl-5 md:col-span-2 md:grid-cols-2 md:p-10'>
            <div className='flex flex-col space-y-6'>
              <h3>Menu</h3>
              <div className='grid grid-cols-2 text-xs'>
                {menu.map((item, index) => {
                  return (
                    <a
                      key={index}
                      href={item.href}
                      className='mb-5 transition hover:opacity-75'>
                      {item.text}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className='flex flex-col space-y-6 md:items-center'>
              <h3 className='opacity-0'>Menu</h3>
              <div className='grid grid-cols-1 items-end text-xs'>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
