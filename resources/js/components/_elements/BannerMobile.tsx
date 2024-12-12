import React from 'react';

export default function BannerMobile({ image }: { image: string }) {
  return (
    <div className='block overflow-hidden rounded-2xl'>
      <img src={image} className='w-full' alt='mobile' />
    </div>
  );
}
