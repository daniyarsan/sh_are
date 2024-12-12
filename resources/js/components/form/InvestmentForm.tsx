import React, { useEffect, useState } from 'react';
import Button from '@/components/_elements/Button';
import { useForm as useInertiaForm, usePage } from '@inertiajs/react';
import { PageProps } from '@/types';
import { z } from 'zod';
import { InvestmentSchema } from '@/types/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import InputField from '@/components/form/elements/InputField';
import { Form } from '@/components/ui/form';
import SelectField from '@/components/form/elements/SelectField';
import { fetchProjectOptions } from '@/components/_api/api';

type InvestmentFormProps = {
  handleProjectsChange: (value: string | null) => void;
};

export default function InvestmentForm({
  handleProjectsChange,
}: InvestmentFormProps) {
  const { csrf_token } = usePage<PageProps>().props;

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetchProjectOptions().then((resp) => {
      setProjects(resp);
    });
  }, []);

  const form = useForm<z.infer<typeof InvestmentSchema>>({
    resolver: zodResolver(InvestmentSchema),
    defaultValues: {
      project: '',
      contact: '',
      _token: csrf_token,
    },
  });

  const { setData, post, data } = useInertiaForm({
    project: '',
    contact: '',
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
    post(route('investment.store'));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <div className='flex flex-col gap-10'>
          <SelectField
            handleSelectChange={handleProjectsChange}
            options={projects}
            label='Project'
            placeholder='Select...'
            name='project'
            control={form.control}
            dark={true}
          />

          <InputField
            label='Email'
            placeholder='Email'
            name='contact'
            control={form.control}
            dark={true}
          />

          <div className='md:w-4/12'>
            <Button className='hover:bg-dark-800'>Pay</Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
