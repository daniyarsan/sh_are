import React, { useRef, useState } from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { FieldValues, UseControllerProps } from 'react-hook-form';

type AvatarUploadFieldProps<T extends FieldValues> = {
  name: string;
  defaultImage?: string;
} & UseControllerProps<T>;

export default function AvatarUploadField<T extends FieldValues>({
  name,
  defaultImage,
  control,
}: AvatarUploadFieldProps<T>) {
  const [preview, setPreview] = useState<string>(
    defaultImage || '/assets/icons/avatar_placeholder.svg',
  );
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  function handleClick() {
    hiddenFileInput.current?.click();
  }

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <div className='w-full flex items-center justify-center'>
              <div
                className='rounded-full size-36 bg-gray-200 cursor-pointer flex items-center justify-center overflow-hidden'
                onClick={handleClick}>
                <img className='object-contain' src={preview} alt='avatar' />
              </div>
            </div>
            <FormControl>
              <input
                type='file'
                ref={hiddenFileInput}
                accept='image/*'
                onChange={(e) => {
                  // const fileUploaded = e.target.files?.[0]; // Get the file object
                  // // Handle file change for react-hook-form (pass FileList or null)
                  // field.onChange(e.target.files); // Pass the FileList (or null) to field.onChange
                  //
                  // if (!fileUploaded) return; // If no file is selected, do nothing
                  //
                  // const fileReader = new FileReader();
                  // fileReader.onload = () => {
                  //   if (fileReader.result) {
                  //     setPreview(fileReader.result as string); // Update preview image with FileReader result
                  //   }
                  // };
                  // fileReader.readAsDataURL(fileUploaded); // Read file as Data URL for preview

                  const fileUploaded = e.target.files?.[0];
                  field.onChange(fileUploaded); // Update form state with the file

                  if (!fileUploaded) return;

                  const fileReader = new FileReader();
                  fileReader.onload = () => {
                    if (fileReader.result) {
                      setPreview(fileReader.result as string); // Update preview state
                    }
                  };
                  fileReader.readAsDataURL(fileUploaded); // Convert file to Data URL
                }}
                className='hidden'
              />
            </FormControl>
            <FormMessage className='text-xs text-red-400' />
          </FormItem>
        );
      }}
    />
  );
}
