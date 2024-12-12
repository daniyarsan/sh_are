import React, { useEffect } from 'react';
import { useForm as useInertiaForm, usePage } from '@inertiajs/react';
import AlertError from '@/components/_elements/alerts/AlertError';
import AlertSuccess from '@/components/_elements/alerts/AlertSuccess';
import { PageProps } from '@/types';
import { z } from 'zod';
import { SettingsPasswordSchema } from '@/types/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import InputField from '@/components/form/elements/InputField';
import PasswordField from '@/components/form/elements/PasswordField';
import Button from '@/components/_elements/Button';

export default function SettingsPasswordForm() {
  const { csrf_token, ...props } = usePage<PageProps>().props;

  const form = useForm<z.infer<typeof SettingsPasswordSchema>>({
    resolver: zodResolver(SettingsPasswordSchema),
    defaultValues: {
      current_password: '',
      password: '',
      password_confirmation: '',
      _token: csrf_token,
    },
  });

  const { setData, post, data } = useInertiaForm({
    current_password: '',
    password: '',
    password_confirmation: '',
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
    post(route('profile.update.password'));
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='h-full flex flex-col gap-5'>
        <div className=''>
          <AlertError errors={props.errors} />
          <AlertSuccess message={props.success} />
          <h3>Смена пароля</h3>
        </div>
        <div className='flex-1'>
          <PasswordField
            label='Текущий пароль'
            placeholder='******'
            name='current_password'
            control={form.control}
          />
          <PasswordField
            label='Пароль'
            placeholder='******'
            name='password'
            control={form.control}
          />
          <PasswordField
            label='Подтверждения пароля'
            placeholder='******'
            name='password_confirmation'
            control={form.control}
          />
        </div>

        <Button className='bg-primary'>Сохранить</Button>
      </form>
    </Form>
  );
}
