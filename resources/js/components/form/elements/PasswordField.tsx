import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { FieldValues, UseControllerProps } from 'react-hook-form';

type PasswordFieldProps<T extends FieldValues> = {
  label: string;
  placeholder?: string;
} & UseControllerProps<T>; // Combines with react-hook-form's `UseControllerProps`

export default function InputField<T extends FieldValues>({
  label,
  placeholder,
  name,
  control,
}: PasswordFieldProps<T>) {
  const [hidden, setHidden] = useState(true);
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel className='text-xs leading-6 text-gray-400 flex flex-row items-center gap-3'>
              {label}
            </FormLabel>
            <FormControl>
              <div className='relative'>
                <Input
                  {...field}
                  type={hidden ? 'password' : 'text'}
                  className='bg-transparent border-0 border-b border-gray-400 rounded-none focus:outline-none focus-visible:ring-0 p-0 text-2lg text-gray-500 placeholder:text-gray-400 sm:text-md sm:leading-6'
                  placeholder={placeholder}
                />
                <img
                  onClick={() => {
                    setHidden(!hidden);
                  }}
                  src={`/assets/icons/${hidden ? 'eye-off' : 'eye'}.svg`}
                  alt=''
                  className='w-6 cursor-pointer absolute-right'
                />
              </div>
            </FormControl>

            <FormMessage className='text-xs text-red-400' />
          </FormItem>
        );
      }}
    />
  );
}
