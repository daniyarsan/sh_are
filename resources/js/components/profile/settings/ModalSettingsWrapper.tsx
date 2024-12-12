import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Settings from '@/components/profile/settings/Settings';
import React from 'react';
import { Button } from '@/components/ui/button';

export default function ModalSettingsWrapper({
  children,
  asChild = false,
}: {
  children: React.ReactNode;
  asChild?: boolean;
}) {
  return (
    <Dialog>
      {asChild ? (
        <DialogTrigger asChild={asChild}>
          <Button className='flex flex-row gap-5 cursor-pointer my-3 rounded-lg text-sm text-center py-6 md:px-7 text-white'>
            {children}
          </Button>
        </DialogTrigger>
      ) : (
        <DialogTrigger>{children}</DialogTrigger>
      )}

      <DialogContent className='md:max-w-fit bg-white'>
        <DialogHeader>
          <DialogTitle className='hidden'>Настройки</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Settings />
      </DialogContent>
    </Dialog>
  );
}
