import React from 'react';
import { Link } from '@inertiajs/react';
import logo from "../../../images/logo/logo.png";

export default function FooterMobile1() {
  return (
    <footer className='mt-auto bg-dark-900 text-white md:hidden'>
      <div className='flex flex-col p-4'>
        <div className='flex flex-row p-3 text-xs'>
          <div className='w-7/12'>
            <Link href='/'>
              <img className='h-12 fill-primary' src={logo} alt='logo'/>
            </Link>
          </div>
          <div className='flex w-5/12 justify-center'>
            <div className='mt-auto flex flex-row gap-3'>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
