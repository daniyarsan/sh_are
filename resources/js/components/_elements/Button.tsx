import React from 'react';
import { motion } from 'framer-motion';
import { Button as ShadButton } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  children,
  className,
  asChild = false,
  ...props
}: Props) {
  return (
    <motion.div whileTap={{ scale: 0.95 }}>
      <ShadButton
        {...props}
        asChild={asChild}
        className={cn(
          'flex flex-row gap-5 mx-auto cursor-pointer my-3 rounded-lg w-full text-sm text-center py-6 md:px-7 text-white',
          className,
        )}>
        {children}
      </ShadButton>
    </motion.div>
  );
}
