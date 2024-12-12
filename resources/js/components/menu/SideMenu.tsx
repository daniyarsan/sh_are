import React from 'react';
import MenuItem from '@/components/menu/MenuItem';
import Close from '@/components/_elements/icons/Close';
import Youtube from '@/components/_elements/icons/Youtube';
import Telegram from '@/components/_elements/icons/Telegram';
import { Link, usePage } from '@inertiajs/react';
import ProfileAvatar from '@/components/profile/ProfileAvatar';
import logo from '../../../../resources/images/logo/logo.png';
import ButtonLink from '@/components/_elements/ButtonLink';
import { PageProps } from '@/types';
import Button from '@/components/_elements/Button';
import { useForm } from '@inertiajs/react';
type SideMenu = {
  isOpen: boolean;
  toggle: () => void;
};

const SideMenu = ({ toggle, isOpen }: SideMenu) => {
  const { auth, menu } = usePage<PageProps>().props;
  const { post } = useForm();
  return (
    <>
      <div
        className={`${isOpen ? '' : 'translate-x-full '}fixed right-0 z-10 flex h-screen w-9/12 flex-col py-10 border-l-2 bg-white p-5 duration-500 md:hidden`}>
        <Close
          onClick={() => {
            toggle();
          }}
          className='absolute right-5 top-5 w-10 fill-primary'
        />

        <div className=''>
          <img src={logo} alt='' />
        </div>

        <div className='border-b border-gray-200 w-full pb-10 text-center'>
          {auth.user ? (
            <Link
              href='/profile'
              className='text-primary text-lg  items-center flex flex-row'>
              <div className='w-4/12'>
                <ProfileAvatar
                  className='size-20'
                  image={auth.user.company.image_path}
                />
              </div>
              <span className='truncate'>{auth.user.login}</span>
            </Link>
          ) : (
            <ButtonLink href='/login'>Enter</ButtonLink>
          )}
        </div>

        <ul className='mt-10 text-lg flex-1'>
          {menu.map((item, index) => {
            return <MenuItem key={index} text={item.text} href={item.href} />;
          })}
        </ul>

        {auth.user && (
          <Button
            onClick={() => {
              post(route('logout'));
            }}>
            Выйти
          </Button>
        )}

      </div>
    </>
  );
};
export default SideMenu;
