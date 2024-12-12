import React from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { FieldValues, UseControllerProps } from 'react-hook-form';

type OTPFieldProps<T extends FieldValues> = {
  label?: string;
} & UseControllerProps<T>; // Combines with react-hook-form's `UseControllerProps`

export default function InputField<T extends FieldValues>({
  label,
  name,
  control,
}: OTPFieldProps<T>) {
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
              <InputOTP maxLength={6} {...field}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </FormControl>

            <FormMessage className='text-xs text-red-400' />
          </FormItem>
        );
      }}
    />
  );
}
