import React from 'react';
import { Link } from '@inertiajs/react';
import { MenuItem as MenuItemProps } from '@/types';

export default function MenuItem({ active, text, href }: MenuItemProps) {
  return (
    <li>
      <Link
        href={href}
        className={`mobile-menu-item md:menu-item ${active && 'mobile-menu-item-active'}`}
        aria-current='page'>
        {text}
      </Link>
    </li>
  );
}
