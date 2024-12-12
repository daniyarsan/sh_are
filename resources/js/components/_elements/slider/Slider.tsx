import React, { useRef } from 'react';
import ReactSlick, { Settings } from 'react-slick';
import ArrowLeft from '@/components/_elements/slider/ArrowLeft';
import ArrowRight from '@/components/_elements/slider/ArrowRight';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type SliderProps = {
  slidesToShow: number;
  children?: React.ReactNode;
};

export default function Slider({ slidesToShow, children }: SliderProps) {
  const sliderRef = useRef<ReactSlick | null>(null); // Correctly typed ref

  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='slider-container space-y-5'>
      <div className='hidden md:flex flex-row justify-end gap-4'>
        <div
          onClick={previous}
          className='size-14 flex items-center justify-center bg-transparent border border-gray-400 rounded-full cursor-pointer'>
          <ArrowLeft />
        </div>
        <div
          onClick={next}
          className='size-14 flex items-center justify-center bg-transparent border border-gray-400 rounded-full cursor-pointer'>
          <ArrowRight />
        </div>
      </div>
      <ReactSlick ref={sliderRef} {...settings} {...settings}>
        {children}
      </ReactSlick>

      <div className='md:hidden flex flex-row justify-center gap-4'>
        <div
          onClick={previous}
          className='size-14 flex items-center justify-center bg-transparent border border-gray-400 rounded-full cursor-pointer'>
          <ArrowLeft />
        </div>
        <div
          onClick={next}
          className='size-14 flex items-center justify-center bg-transparent border border-gray-400 rounded-full cursor-pointer'>
          <ArrowRight />
        </div>
      </div>
    </div>
  );
}
