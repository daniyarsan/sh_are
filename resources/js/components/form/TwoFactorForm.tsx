import React, { useEffect } from 'react';
import Button from '@/components/_elements/Button';
import { useForm as useInertiaForm, usePage } from '@inertiajs/react';
import { PageProps } from '@/types';
import { z } from 'zod';
import { OTPSchema } from '@/types/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import OTPField from '@/components/form/elements/OTPField';

export default function TwoFactorForm() {
  const { auth } = usePage<PageProps>().props;

  const form = useForm<z.infer<typeof OTPSchema>>({
    resolver: zodResolver(OTPSchema),
    defaultValues: {
      otp: '',
      secret: auth.secret,
    },
  });

  const formValues = form.watch();

  const { data, setData, post } = useInertiaForm({
    otp: '',
    secret: '',
  });

  useEffect(() => {
    // Only update Inertia form data if form values differ
    if (JSON.stringify(formValues) !== JSON.stringify(data)) {
      setData(formValues);
    }
  }, [formValues, data, setData]);

  function onSubmit() {
    post(route('twofactor.store'));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <div className='mt-10 flex flex-col space-y-10'>
          <div
            className='flex justify-center'
            dangerouslySetInnerHTML={{ __html: auth.qr }}></div>
          <div className='flex justify-center'>
            <OTPField name='otp' control={form.control} />
          </div>
        </div>
        <Button className='bg-primary'>Continue</Button>
      </form>
    </Form>
  );
}
