import React from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { FieldValues, UseControllerProps } from 'react-hook-form';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SelectOption } from '@/types';
import { cn } from '@/lib/utils';

type InputFieldProps<T extends FieldValues> = {
  label: string;
  name: string;
  options: SelectOption[];
  handleSelectChange?: (value: string | null) => void;
  placeholder?: string;
  dark?: boolean;
} & UseControllerProps<T>;

export default function SelectField<T extends FieldValues>({
  label,
  name,
  options,
  placeholder,
  control,
  handleSelectChange,
  dark,
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
              <Select
                onValueChange={(e) => {
                  field.onChange(e);
                  if (handleSelectChange) {
                    handleSelectChange(e);
                  }
                }}
                defaultValue={field.value}>
                {/* Manually attach `ref` to SelectTrigger */}
                <SelectTrigger
                  ref={field.ref} // Attach `ref` here
                  className={cn(
                    'border-0 relative bg-transparent border-b border-gray-400 rounded-none p-0 text-2lg text-gray-500 placeholder:text-gray-400 sm:text-md sm:leading-6',
                    dark ? 'text-light-600' : '',
                  )}>
                  <SelectValue placeholder={placeholder || 'Выбрать...'} />
                </SelectTrigger>
                <SelectContent className='bg-transparent border-0 bg-white'>
                  <SelectGroup className='p-0'>
                    {options.map((item) => (
                      <SelectItem
                        key={item.value}
                        value={item.value.toString()}
                        className='cursor-pointer focus:bg-light-600'>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormControl>

            <FormMessage className='text-xs text-red-400' />
          </FormItem>
        );
      }}
    />
  );
}
