import useGetData from '@/lib/useGetData.js';
import { BASE_API_URL } from '@/api/const.js';
import DonatorCard from '@/components/donator/DonatorCard';
import { useEffect } from 'react';
import { ApiResponse, Company } from '@/types';

type Props = {
  page: number;
  order: string;
  period: number | null;
  fallback?: (response: ApiResponse<Company> | undefined) => void;
};

export default function DonatorThread({
  page,
  order,
  period,
  fallback,
}: Props) {
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

  const response = useGetData<Company>(
    `${BASE_API_URL}/donators?${new URLSearchParams(params).toString()}`,
  );

  useEffect(() => {
    if (fallback) {
      fallback(response);
    }
  }, [response]);

  return (
    response &&
    response.data.map((item, index) => {
      const id = index + 1;
      return (
        <DonatorCard id={id} key={id} donator={item} highlighted={id === 1} />
      );
    })
  );
}
