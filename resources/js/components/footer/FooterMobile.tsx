import React from 'react';
import { Link } from '@inertiajs/react';
import logo from "../../../images/logo/logo.png";


export default function FooterMobile() {
  return (
    <footer className='mt-auto bg-dark-900 text-white md:hidden'>
      <div className='flex flex-col p-4'>
        <div className='flex flex-row divide-x-2 divide-gray-600 border-b-2 border-gray-600 p-2 text-xs'>
          <div className='w-6/12'>

          </div>
          <div className='w-6/12'>

          </div>
        </div>

        <div className='flex items-center justify-center p-5'>
          <Link href='/'>
            <img className='h-12 fill-primary' src={logo} alt='logo'/>
          </Link>
        </div>
      </div>
    </footer>
  );
}
