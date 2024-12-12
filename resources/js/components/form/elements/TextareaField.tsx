import React from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { FieldValues, UseControllerProps } from 'react-hook-form';
import { cn } from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';

type InputFieldProps<T extends FieldValues> = {
  label: string;
  name: string;
  placeholder?: string;
  dark?: boolean;
} & UseControllerProps<T>; // Combines with react-hook-form's `UseControllerProps`

export default function TextareaField<T extends FieldValues>({
  label,
  placeholder,
  name,
  dark,
  control,
}: InputFieldProps<T>) {
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
              <Textarea
                {...field}
                className={cn(
                  'bg-transparent border-0 border-b border-gray-400 rounded-none focus:outline-none focus-visible:ring-0 p-0 text-2lg text-gray-500 placeholder:text-gray-400 sm:text-md sm:leading-6',
                  dark ? 'text-light-700' : '',
                )}
                placeholder={placeholder}
              />
            </FormControl>

            <FormMessage className='text-xs text-red-400' />
          </FormItem>
        );
      }}
    />
  );
}
