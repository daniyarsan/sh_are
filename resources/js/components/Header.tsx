import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';

import logo from '../../images/logo/logo.png';
import ProfileAvatar from '@/components/profile/ProfileAvatar';

import MenuIcon from '@/components/_elements/icons/MenuIcon';
import TopMenu from '@/components/menu/TopMenu';
import SideMenu from '@/components/menu/SideMenu';
import DropdownProfile from '@/components/menu/DropdownProfile';
import ButtonLink from '@/components/_elements/ButtonLink';
import { PageProps } from '@/types';
import React from 'react';

export default function Header() {
  const { auth, origin } = usePage<PageProps>().props;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <nav className='start-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900'>
          <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
            <Link className='md:hidden' href='/'>
              <img className='h-12 fill-primary' src={logo} alt='logo' />
            </Link>
            <Link className='hidden md:block' href='/'>
              <img className='h-12 fill-primary ' src={logo} alt='logo' />
            </Link>

            <TopMenu />

            <div className='flex space-x-3 md:hidden rtl:space-x-reverse'>
              <button
                onClick={() => {
                  toggle();
                }}
                data-collapse-toggle='navbar-sticky'
                type='button'
                className='z-10 size-12 items-center justify-center rounded-lg p-2 hover:bg-gray-100 md:hidden'
                aria-controls='navbar-sticky'
                aria-expanded='false'>
                <MenuIcon />
              </button>
            </div>

            <div className='hidden md:block'>
              {auth.user ? (
                <DropdownProfile
                  menuList={[
                    { href: '/profile', text: 'Профиль' },
                    { href: '/investment/payments', text: 'Платежи' },
                  ]}>
                  <div className='text-primary text-md items-center md:flex flex-row justify-between gap-5 hidden'>
                    {auth.user.company.image_path && (
                      <ProfileAvatar
                        className='size-10'
                        image={auth.user.company.image_path}
                      />
                    )}
                    {auth.user.login}
                  </div>
                </DropdownProfile>
              ) : (
                <ButtonLink href='/login'>Enter</ButtonLink>
              )}
            </div>
          </div>
        </nav>
      </header>

      <SideMenu toggle={toggle} isOpen={isOpen} />
    </>
  );
}
