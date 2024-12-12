import React, { Suspense, useState } from 'react';

import Tabs from '@/components/tabs/Tabs';
import CompanyThread from '@/components/company/CompanyThread';
import { usePage } from '@inertiajs/react';
import { ApiResponse, Company, PageProps } from '@/types';
import CompanyThreadLoading from '@/components/company/loading/CompanyThreadLoading';

type QueryProps = {
  page?: string;
  period?: string;
};

export default function CompaniesRatingWidget() {
  const { ziggy: query }: { ziggy: { query: QueryProps } } =
    usePage<PageProps>().props;

  const [response, setResponse] = useState<ApiResponse<Company>>();

  const [page, setPage] = useState<number>(
    query.query.page ? parseInt(query.query.page) : 1,
  );
  const [period, setPeriod] = useState<string | number | null>(
    query.query.period ? parseInt(query.query.period) : null,
  );

  return (
    <>
      <div className='flex flex-col space-y-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          <Tabs
            current={period}
            options={[
              { label: 'All time', value: null },
              { label: '30 days', value: 30 },
              { label: '90 days', value: 90 },
              { label: '360 days', value: 360 },
            ]}
            onChange={(value: string | number | null) => {
              const url = new URL(location.toString());
              if (value) {
                url.searchParams.set('period', value?.toString());
                history.pushState({}, '', url);
              } else {
                url.searchParams.delete('period');
                history.pushState({}, '', url);
              }
              setPeriod(value);
            }}
          />
        </div>
      </div>

      <Suspense fallback={<CompanyThreadLoading />}>
        <CompanyThread
          page={page}
          period={period}
          fallback={(response) => {
            setResponse(response);
          }}
        />
      </Suspense>
    </>
  );
}
