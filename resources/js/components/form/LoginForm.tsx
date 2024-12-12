import React, { useContext, useEffect } from 'react';
import { router, useForm as useInertiaForm, usePage } from '@inertiajs/react';
import { useForm } from 'react-hook-form';
import { ParamsContext } from '@/contexts/ParamsProvider';
import { PageProps } from '@/types';
import InputField from '@/components/form/elements/InputField';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '@/types/schema';
import Button from '@/components/_elements/Button';
import PasswordField from '@/components/form/elements/PasswordField';

export default function LoginForm() {
  const context = useContext(ParamsContext);
  if (!context) {
    throw new Error('ParamsContext must be used within a ParamsProvider');
  }
  const { setLoading } = context;
  const { csrf_token } = usePage<PageProps>().props;

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      login: '',
      password: '',
      _token: csrf_token,
    },
  });

  const { setData, post, data } = useInertiaForm({
    login: '',
    password: '',
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
    post(route('login'));
  }

  router.on('start', function () {
    setLoading(true);
  });

  router.on('finish', function () {
    setLoading(false);
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <InputField
          label='Login'
          placeholder=''
          name='login'
          control={form.control}
        />
        <PasswordField
          label='Password'
          placeholder='******'
          name='password'
          control={form.control}
        />
        <Button className='bg-primary'>Enter</Button>
      </form>
    </Form>
  );
}
