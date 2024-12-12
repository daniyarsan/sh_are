import CompanyCardLoading from '@/components/company/loading/CompanyCardLoading';

export default function CompanyThreadLoading() {
  return [1].map((_, index) => {
    return <CompanyCardLoading key={index} />;
  });
}
