import { useGetDataPlain } from '@/lib/useGetData.js';
import { BASE_API_URL } from '@/api/const.js';
import { Investment } from '@/types';
import React, { useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import ClipboardCopy from '@/components/_elements/clipboard/ClipboardCopy';
import Copy from '@/components/_elements/icons/Copy/Copy';

type Props = {
  status: string;
  fallback?: (response: Investment[] | undefined) => void;
};

export default function PaymentThread({ status, fallback }: Props) {
  const params: Record<string, string> = {};

  if (status) {
    params.status = status;
  }

  const response = useGetDataPlain<Investment[]>(
    `${BASE_API_URL}/investments/profile?${new URLSearchParams(params).toString()}`,
  );

  useEffect(() => {
    if (fallback) {
      fallback(response);
    }
  }, [response]);

  return (
    response && (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-5/12 '>Проект</TableHead>
            <TableHead className='w-5/12 text-right'>Адрес</TableHead>
            <TableHead className='w-2/12 text-right'>Создан</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {response.map((item, index) => {
            return (
              <TableRow className='h-14' key={index}>
                <TableCell className='font-medium'>
                  {item.project.name}
                </TableCell>
                <TableCell className='text-right gap-5 flex flex-row justify-end'>
                  {item.paymentAddress}
                  {item.paymentAddress && (
                    <ClipboardCopy text={item.paymentAddress}>
                      <Copy className='inline size-[15px] cursor-pointer fill-primary' />
                    </ClipboardCopy>
                  )}
                </TableCell>
                <TableCell className='text-right'>{item.created_at}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    )
  );
}
