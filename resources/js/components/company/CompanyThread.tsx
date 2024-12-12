import useGetData from '@/lib/useGetData.js';
import { BASE_API_URL } from '@/api/const.js';
import { ApiResponse, Company } from '@/types';
import { useEffect } from 'react';
import React from 'react';
import CompanyCard from '@/components/company/CompanyCard';

type Props = {
  page: number;
  period: string | number | null;
  fallback?: (response: ApiResponse<Company> | undefined) => void;
};

export default function CompanyThread({ page, period, fallback }: Props) {
  const params: Record<string, string> = {};

  if (page) {
    params.page = page.toString();
  }

  if (period) {
    params.period = period.toString();
  }

  const response = useGetData<Company>(
    `${BASE_API_URL}/companies?${new URLSearchParams(params).toString()}`,
  );

  useEffect(() => {
    if (fallback) {
      fallback(response);
    }
  }, [response]);

  return (
    response && (
      <div className='flex flex-col space-y-10'>
        {response.data.map((item, index) => {
          return <CompanyCard key={index} index={index + 1} company={item} />;
        })}
      </div>
    )
  );
}
