import { Suspense, useState } from 'react';
import DonatorThread from '@/components/donator/DonatorThread';
import DonatorThreadLoading from '@/components/donator/loading/DonatorThreadLoading';
import { usePage } from '@inertiajs/react';
import Tabs from '@/components/tabs/Tabs';
import { ApiResponse, Company, PageProps } from '@/types';
import Button from '@/components/_elements/Button';
import SelectFilter from '@/components/filters/SelectFilter';
import React from 'react';

type QueryProps = {
  page?: string;
  order?: string;
  period?: string;
};

export default function DonatorsThreadWidget() {
  const { ziggy: query }: { ziggy: { query: QueryProps } } =
    usePage<PageProps>().props;

  const [response, setResponse] = useState<ApiResponse<Company>>();

  const [page, setPage] = useState<number>(
    query.query.page ? parseInt(query.query.page) : 1,
  );
  const [order, setOrder] = useState<string>(query.query.order || 'desc');
  const [period, setPeriod] = useState<string | number | null>(
    query.query.period ? parseInt(query.query.period) : null,
  );

  function handlePageUpdate(page: number) {
    setPage(page);
    const url = new URL(location.toString());
    url.searchParams.set('page', page.toString());
    history.pushState({}, '', url);
  }

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

          <div className='filters grid grid-cols-1 gap-3'>
            <div className='flex flex-row gap-5 justify-end'>
              <SelectFilter
                label='Сортировка'
                options={[
                  { label: 'По возрастанию', value: 'asc' },
                  { label: 'По убыванию', value: 'desc' },
                ]}
                defaultValue={order}
                onChange={(value) => {
                  const url = new URL(location.toString());
                  url.searchParams.set('order', value);
                  history.pushState({}, '', url);
                  setOrder(value);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-5'>
        <Suspense fallback={<DonatorThreadLoading />}>
          <DonatorThread
            page={page}
            order={order}
            period={Number(period)}
            fallback={(response) => {
              setResponse(response);
            }}
          />
        </Suspense>
      </div>

      <div className='flex flex-row justify-between'>
        <div className='w-3/12'>
          {page > 1 && (
            <Button
              onClick={() => handlePageUpdate(page > 1 ? page - 1 : 1)}
              className='bg-dark-900 text-white'>
              Назад
            </Button>
          )}
        </div>

        <div className='w-3/12'>
          {response && page < response?.meta?.last_page && (
            <Button
              onClick={() => {
                if (response?.meta.last_page) {
                  handlePageUpdate(
                    page < response?.meta.last_page
                      ? page + 1
                      : response?.meta.last_page,
                  );
                }
              }}
              className='bg-dark-900 text-white'>
              Далее...
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
