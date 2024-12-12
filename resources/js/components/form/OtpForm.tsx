import React, { useEffect } from 'react';
import Button from '@/components/_elements/Button';
import { useForm as useInertiaForm, usePage } from '@inertiajs/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { OtpCheckSchema } from '@/types/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { PageProps } from '@/types';
import { Form } from '@/components/ui/form';
import OTPField from '@/components/form/elements/OTPField';

export default function OtpForm() {
  const { csrf_token } = usePage<PageProps>().props;
  const form = useForm<z.infer<typeof OtpCheckSchema>>({
    resolver: zodResolver(OtpCheckSchema),
    defaultValues: {
      otp: '',
    },
  });

  const { setData, post, data } = useInertiaForm({
    otp: '',
    _token: csrf_token,
  });

  const formValues = form.watch();

  useEffect(() => {
    // Only update Inertia form data if form values differ
    if (JSON.stringify(formValues) !== JSON.stringify(data)) {
      setData({ ...formValues, _token: csrf_token });
    }
  }, [formValues, data, setData]);

  function onSubmit() {
    post(route('otp.store'));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <OTPField name='otp' control={form.control} />

        <Button className='bg-primary'>Check</Button>
      </form>
    </Form>
  );
}
