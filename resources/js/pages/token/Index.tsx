import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/layouts/MainLayout';
import CopyToken from '@/components/_elements/clipboard/CopyToken';

import ButtonLink from '@/components/_elements/ButtonLink';

export default function Index({ restore_token }: { restore_token: string }) {
  const title = 'Токен восстановления';

  return (
    <MainLayout>
      <Head title={title} />

      <section className='px-5'>
        <div className='my-10 md:my-20 md:w-4/12 flex-col m-auto items-center justify-center space-y-8'>
          <h3>{title}</h3>
          <p>
            2FA подключен успешно. Обязательно сохраните резервный ключ, чтобы
            восстановить аккаунт в случае утери устройства.
          </p>

          <CopyToken toCopy={restore_token}>{restore_token}</CopyToken>

          <ButtonLink
            href={route('profile.index')}
            className='bg-primary text-white w-full'>
            Готово
          </ButtonLink>
        </div>
      </section>
    </MainLayout>
  );
}
