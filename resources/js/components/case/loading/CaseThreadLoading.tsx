import CaseCardLoading from '@/components/case/loading/CaseCardLoading.jsx';

export default function CaseThreadLoading() {
  return [1, 2, 3, 4, 5, 6].map((_, index) => {
    return <CaseCardLoading key={index} />;
  });
}
