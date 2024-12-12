import useGetData from '@/lib/useGetData.js';
import { BASE_API_URL } from '@/api/const.js';
import { Application } from '@/types';
import CaseSliderCard from '@/components/case/CaseSliderCard';
import Slider from '@/components/_elements/slider/Slider';
import CaseInvestedCounter from '@/components/counters/CaseInvestedCounter';
import React from 'react';

export default function CaseSlider() {
  const response = useGetData<Application>(`${BASE_API_URL}/applications`);
  return (
    <>
      {response && (
        <Slider
          slidesToShow={response.data.length > 3 ? 3 : response.data.length}>
          {response.data.map((item, index) => {
            return (
              <div key={index} className='p-5'>
                <CaseSliderCard application={item} />
              </div>
            );
          })}
        </Slider>
      )}

      <CaseInvestedCounter />
    </>
  );
}
