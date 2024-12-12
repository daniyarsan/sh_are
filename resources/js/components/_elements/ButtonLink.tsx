import { cn } from '@/lib/utils';
import React from 'react';

import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Button as ShadButton } from '@/components/ui/button';

type Props = {
  children: React.ReactNode;
  href: string;
  className?: string;
  method?: 'get' | 'post' | 'put' | 'delete' | 'patch';
};

export default function ButtonLink({
  children,
  href,
  method,
  className,
  ...props
}: Props) {
  return (
    <motion.div whileTap={{ scale: 0.95 }}>
      <Link method={method} href={href}>
        <ShadButton
          {...props}
          className={cn(
            'flex flex-row gap-5 mx-auto cursor-pointer my-3 rounded-lg w-full text-sm text-center py-6 md:px-7 text-white',
            className,
          )}>
          {children}
        </ShadButton>
      </Link>
    </motion.div>
  );
}
