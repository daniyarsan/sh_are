import React, { useEffect } from 'react';
import { router, useForm as useInertiaForm, usePage } from '@inertiajs/react';
import Button from '@/components/_elements/Button';
import { PageProps } from '@/types';
import AlertError from '@/components/_elements/alerts/AlertError';
import AlertSuccess from '@/components/_elements/alerts/AlertSuccess';
import { z } from 'zod';
import { SettingsOtpSchema } from '@/types/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import OTPField from '@/components/form/elements/OTPField';
import ButtonLink from '@/components/_elements/ButtonLink';

export default function SettingsTwoFactorForm() {
  const { auth, csrf_token, ...props } = usePage<PageProps>().props;

  const form = useForm<z.infer<typeof SettingsOtpSchema>>({
    resolver: zodResolver(SettingsOtpSchema),
    defaultValues: {
      otp: '',
      secret: auth.secret,
      _token: csrf_token,
    },
  });

  const { setData, post, data } = useInertiaForm({
    otp: '',
    secret: '',
    _token: csrf_token,
  });

  const formValues = form.watch();

  useEffect(() => {
    // Only update Inertia form data if form values differ
    if (JSON.stringify(formValues) !== JSON.stringify(data)) {
      setData(formValues);
    }
  }, [formValues, data, setData]);

  function onSubmit() {
    post(route('profile.update.twofactor'));
  }

  if (auth.user.google2fa_secret) {
    return (
      <>
        <AlertError errors={props.errors} />
        <AlertSuccess message={props.success} />
        <h3>Подключение 2FA</h3>
        <p className='text-sm'>
          Двухфакторная аутентификация подключена успешно!
        </p>

        <div className='space-y-2 flex flex-col'>
          <Button
            onClick={() => {
              router.post(route('twofactor.destroy'));
            }}>
            Отключить 2FA
          </Button>
          <ButtonLink href={route('reset_token.index')}>
            Устройство с 2FA утеряно
          </ButtonLink>
        </div>
      </>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='h-full flex flex-col gap-5'>
        <div className=''>
          <AlertError errors={props.errors} />
          <AlertSuccess message={props.success} />
          <h3>Подключение 2FA</h3>

          <p className='text-sm'>
            Отсканируйте этот QR-код в приложении аутентикатора или введите код
            вручную: {auth.secret}
          </p>
        </div>
        <div className='flex-1'>
          <div
            className='flex justify-center'
            dangerouslySetInnerHTML={{ __html: auth.qr }}></div>
          <div className='flex justify-center'>
            <OTPField name='otp' control={form.control} />
          </div>
        </div>

        <Button className='bg-primary'>Сохранить</Button>
      </form>
    </Form>
  );
}
