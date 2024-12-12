import CaseCardLoading from '@/components/case/loading/CaseCardLoading.jsx';

export default function CaseCarouselLoading() {
  return (
    <div className='flex flex-row gap-10 w-full'>
      {[1, 2, 3].map((_, index) => {
        return <CaseCardLoading key={index} />;
      })}
    </div>
  );
}
