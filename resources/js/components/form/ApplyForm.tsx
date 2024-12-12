import { useEffect } from 'react';
import Button from '@/components/_elements/Button';
import { useForm as useInertiaForm, usePage } from '@inertiajs/react';
import { PageProps } from '@/types';
import React from 'react';
import { z } from 'zod';
import { ApplySchema } from '@/types/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import InputField from '@/components/form/elements/InputField';
import TextareaField from '@/components/form/elements/TextareaField';

export default function ApplyForm() {
  const { csrf_token } = usePage<PageProps>().props;

  const form = useForm<z.infer<typeof ApplySchema>>({
    resolver: zodResolver(ApplySchema),

    defaultValues: {
      name: '',
      username: '',
      story_request: '',
      _token: csrf_token,
    },
  });

  const { setData, post, data, wasSuccessful } = useInertiaForm({
    name: '',
    username: '',
    story_request: '',
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
    post(route('application.store'), {
      onStart: () => {},
      onSuccess: () => {
        form.reset();
      },
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-6'>
          <div className='md:col-span-3'>
            <InputField
              label='Name'
              placeholder=''
              name='name'
              control={form.control}
            />
          </div>

          <div className='md:col-span-3'>
            <InputField
              label='Email'
              placeholder=''
              name='username'
              control={form.control}
            />
          </div>

          <div className='md:col-span-6'>
            <TextareaField
              label='Description'
              placeholder=''
              name='story_request'
              control={form.control}
            />
          </div>
        </div>

        <Button className='bg-dark-900 text-white'>Send</Button>
      </form>
    </Form>
  );
}
