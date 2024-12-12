import { Suspense } from 'react';
import CaseSlider from '@/components/case/CaseSlider';
import CaseCarouselLoading from '@/components/case/loading/CaseCarouselLoading';

export default function CaseCarouselWidget() {
  return (
    <div className='space-y-10'>
      <h2>Cases</h2>

      <Suspense fallback={<CaseCarouselLoading />}>
        <CaseSlider />
      </Suspense>
    </div>
  );
}
