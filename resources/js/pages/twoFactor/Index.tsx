import React from 'react';
import { Head, usePage } from '@inertiajs/react';
import MainLayout from '@/layouts/MainLayout';
import TwoFactorForm from '@/components/form/TwoFactorForm';
import { PageProps } from '@/types';
import ButtonLink from '@/components/_elements/ButtonLink';

export default function Index() {
  const { auth } = usePage<PageProps>().props;

  const title = 'Подключение 2FA';

  return (
    <MainLayout>
      <Head title={title} />

      <section className='px-5'>
        <div className='my-10 md:my-20 md:w-4/12 flex-col m-auto items-center justify-center space-y-8'>
          <h3>{title}</h3>
          <p>
            Отсканируйте этот QR-код в приложении аутентикатора или введите код
            вручную - <span className='text-md font-medium'>{auth.secret}</span>
            .
          </p>

          <TwoFactorForm />

          <ButtonLink className='bg-dark-900' href={route('profile.index')}>
            Пропустить
          </ButtonLink>
        </div>
      </section>
    </MainLayout>
  );
}
