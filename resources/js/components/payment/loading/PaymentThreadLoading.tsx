import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

export default function PaymentThreadLoading() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='w-5/12'>Проект</TableHead>
          <TableHead className='w-5/12 text-right'>Адрес</TableHead>
          <TableHead className='w-2/12 text-right'>Создан</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className='h-14'>
          <TableCell>
            <Skeleton className='h-4 w-full' />
          </TableCell>
          <TableCell className='text-right'>
            <Skeleton className='h-4' />
          </TableCell>
          <TableCell className='text-right'>
            <Skeleton className='h-4' />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
