import React from 'react';
import { Image } from '@/types';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function ImagePreview({ image }: { image: Image }) {
  return (
    <div className='relative h-[200px]'>
      <img
        key={image.id}
        className='h-full w-full object-cover rounded-2xl'
        src={`/storage/images/${image.filepath}`}
      />

      <Dialog>
        <DialogTrigger>
          <span className='absolute-center z-10 size-25 bg-dark-900 opacity-80 hover:opacity-100 rounded-full flex justify-center items-center p-5 cursor-pointer'>
            <img src={`/assets/icons/eye.svg`} alt='' className='w-6' />
          </span>
        </DialogTrigger>

        <DialogContent className='md:max-w-fit border-0 shadow-none'>
          <DialogHeader>
            <DialogTitle className='hidden'>Настройки</DialogTitle>
            <DialogDescription className='hidden'></DialogDescription>
          </DialogHeader>
          <img
            key={image.id}
            className='rounded-2xl mx-auto max-w-[80%] max-h-[90vh] z-50'
            src={`/storage/images/${image.filepath}`}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
