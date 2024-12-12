import React from 'react';

export default function Banner({ image }: { image: string }) {
  return (
    <div className='block overflow-hidden rounded-2xl'>
      <img src={image} className='w-full' alt='image' />
    </div>
  );
}
