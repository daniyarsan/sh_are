import React, { useEffect } from 'react';
import { useForm as useInertiaForm, usePage } from '@inertiajs/react';
import { PageProps } from '@/types';
import AlertError from '@/components/_elements/alerts/AlertError';
import AlertSuccess from '@/components/_elements/alerts/AlertSuccess';
import { useForm } from 'react-hook-form';
import { SettingsProfileSchema } from '@/types/schema';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import InputField from '@/components/form/elements/InputField';
import Button from '@/components/_elements/Button';
import AvatarUploadField from '@/components/form/elements/AvatarField';

export default function SettingsProfileForm() {
  const { auth, csrf_token, ...props } = usePage<PageProps>().props;

  const form = useForm<z.infer<typeof SettingsProfileSchema>>({
    resolver: zodResolver(SettingsProfileSchema),
    defaultValues: {
      _token: csrf_token,
    },
  });

  const { setData, post, data } = useInertiaForm({
    _token: csrf_token,
  });

  const formValues = form.watch();

  useEffect(() => {
    if (JSON.stringify(formValues) !== JSON.stringify(data)) {
      setData(formValues);
    }
  }, [formValues, data, setData]);

  function onSubmit() {
    post(route('profile.update.profile'));
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='h-full flex flex-col gap-5'>
        <div className=''>
          <AlertError errors={props.errors} />
          <AlertSuccess message={props.success} />
          <h3>Профиль</h3>
        </div>
        <div className='flex-1 gap-5'>
          <AvatarUploadField
            name='image'
            defaultImage={
              auth.user.company?.image_path
                ? `/storage/images/companies/${auth.user.company?.image_path}`
                : undefined
            }
            control={form.control}
          />

          <InputField
            label='Логин'
            placeholder='gentleman'
            name='login'
            control={form.control}
          />
        </div>

        <div className=''>
          <Button className='bg-primary'>Сохранить</Button>
        </div>
      </form>
    </Form>
  );
}
