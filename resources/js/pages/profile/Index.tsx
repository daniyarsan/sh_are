import MainLayout from '@/layouts/MainLayout';
import { Head, usePage } from '@inertiajs/react';
import ProfileAvatar from '@/components/profile/ProfileAvatar';
import ProfileStats from '@/components/profile/ProfileStats';
import SettingsIcon from '@/components/_elements/icons/SettingsIcon';
import CompanyInvestmentsTable from '@/components/CompanyInvestmentsTable';

import ModalSettingsWrapper from '@/components/profile/settings/ModalSettingsWrapper';
import { PageProps } from '@/types';
import React from 'react';

export default function Index() {
  const title = 'Ваш профиль';
  const { auth } = usePage<PageProps>().props;

  const company = auth.user.company;

  return (
    <MainLayout>
      <Head title={title} />

      <section className='space-y-20 px-5 my-10 md:my-20'>
        <div className='flex flex-col md:hidden space-y-5'>
          <div className='flex flex-row items-center space-x-5'>
            <ModalSettingsWrapper>
              <ProfileAvatar className='size-32' image={company.image_path} />
            </ModalSettingsWrapper>
            <h3 className='truncate'>{auth.user.login}</h3>
          </div>
          <ModalSettingsWrapper asChild={true}>
            <SettingsIcon /> Настройки
          </ModalSettingsWrapper>
        </div>

        <div className='hidden md:flex flex-col md:flex-row justify-between'>
          <h1 className=''>{title}</h1>
          <ModalSettingsWrapper asChild={true}>
            <SettingsIcon /> Настройки
          </ModalSettingsWrapper>
        </div>

        <div className='grid min-h-[30vh] grid-cols-1 divide-gray-300 md:grid-cols-3 md:divide-x'>
          <div className='hidden md:flex flex-col justify-center items-center space-y-7'>
            <ModalSettingsWrapper>
              <ProfileAvatar className='size-36' image={company.image_path} />
            </ModalSettingsWrapper>

            <h3 className=''>{auth.user.login}</h3>
          </div>
          <div className='col-span-2 justify-center items-center bg-light-xl md:bg-transparent py-10 rounded-2xl md:rounded-none'>
            <ProfileStats company={company} />
          </div>
        </div>

        <CompanyInvestmentsTable company={company} title='Ваши вклады' />
      </section>
    </MainLayout>
  );
}
