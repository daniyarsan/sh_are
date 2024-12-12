import React, { Suspense, useState } from 'react';
import Tabs from '@/components/tabs/Tabs';

import { usePage } from '@inertiajs/react';
import { Investment, PageProps } from '@/types';
import PaymentThread from '@/components/payment/PaymentThread';
import PaymentThreadLoading from '@/components/payment/loading/PaymentThreadLoading';

type QueryProps = {
  status?: string;
};

export default function PaymentWidget() {
  const { ziggy: query }: { ziggy: { query: QueryProps } } =
    usePage<PageProps>().props;

  const [response, setResponse] = useState<Investment[]>();

  const [status, setStatus] = useState<string>(
    query.query.status ? query.query.status : 'new',
  );

  return (
    <>
      <div className='flex flex-col space-y-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          <Tabs
            current={status}
            options={[
              { label: 'Новые', value: 'new' },
              { label: 'Оплаченные', value: 'completed' },
              { label: 'Отмененные', value: 'canceled' },
            ]}
            onChange={(value) => {
              const url = new URL(location.toString());
              if (!value) {
                url.searchParams.delete('status');
                history.pushState({}, '', url);
                setStatus('new');
                return;
              }

              url.searchParams.set('status', value?.toString());
              history.pushState({}, '', url);
              setStatus(value.toString());
            }}
          />
        </div>
      </div>

      <Suspense fallback={<PaymentThreadLoading />}>
        <PaymentThread
          status={status}
          fallback={(response) => {
            setResponse(response);
          }}
        />
      </Suspense>
    </>
  );
}
