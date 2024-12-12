import useGetData from '@/lib/useGetData.js';
import { BASE_API_URL } from '@/api/const.js';
import CaseCard from '@/components/case/CaseCard.jsx';
import { ApiResponse, Application } from '@/types';
import { useEffect } from 'react';
import React from 'react';

type Props = {
  page: number;
  order: string;
  period: string | number | null;
  fallback?: (response: ApiResponse<Application> | undefined) => void;
};

export default function CaseThread({ page, order, period, fallback }: Props) {
  const params: Record<string, string> = {};

  if (order) {
    params.order = order;
  }

  if (page) {
    params.page = page.toString();
  }

  if (period) {
    params.period = period.toString();
  }

  const response = useGetData<Application>(
    `${BASE_API_URL}/applications?${new URLSearchParams(params).toString()}`,
  );

  useEffect(() => {
    if (fallback) {
      fallback(response);
    }
  }, [response]);

  return (
    response &&
    response.data.map((item, index) => {
      return <CaseCard key={index} application={item} />;
    })
  );
}
