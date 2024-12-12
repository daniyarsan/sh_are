import { useState } from 'react';
import { Company } from '@/types';
import { cn, formatNoun } from '@/lib/utils';
import StatsWidget from '@/components/_elements/StatsWidget';
import DonatorInvestmentTable from '@/components/donator/DonatorInvestmentTable';
import React from 'react';

function ProfilePlaceholder() {
  return (
    <svg
      width='50px'
      height='50px'
      viewBox='0 0 50 50'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'>
      <title>Path</title>
      <g
        id='Page-1'
        stroke='none'
        strokeWidth='1'
        fill='none'
        fillRule='evenodd'>
        <g
          id='Рейтинг-донатеров'
          transform='translate(-186.000000, -1297.000000)'
          fill='#CFCFCF'
          fillRule='nonzero'>
          <g id='Group-3-Copy-3' transform='translate(40.000000, 1252.000000)'>
            <g
              id='suit-club-fill-svgrepo-com'
              transform='translate(146.000000, 45.000000)'>
              <path
                d='M0,30.0693505 C0,36.4461384 4.98680386,41.38207 11.3262682,41.38207 C14.8541408,41.38207 18.461575,40.2081654 20.0265507,37.086481 L20.2918315,37.086481 C20.2918315,40.6350605 16.4191165,43.5699357 14.8541408,45.2241256 C12.9443227,47.225182 14.1114904,50 16.5782397,50 L33.4218734,50 C35.86214,50 37.0293076,47.225182 35.1194895,45.2241256 C33.5544007,43.5699357 29.6817988,40.6350605 29.6817988,37.086481 L29.9735625,37.086481 C31.5119422,40.2081654 35.1459723,41.38207 38.647249,41.38207 C44.9868265,41.38207 50,36.4461384 50,30.0693505 C50,23.6659244 45.1725457,18.2497074 38.8329682,18.2497074 C36.4191844,18.2497074 33.9258391,19.0768593 31.9629422,20.6242686 C35.2520168,17.929593 36.4191844,14.5410707 36.4191844,11.4994149 C36.4191844,5.12274087 31.2998533,0 24.9867586,0 C18.700373,0 13.5809288,5.12274087 13.5809288,11.4994149 C13.5809288,14.5410707 14.7215004,17.929593 18.0106882,20.6242686 C16.0743873,19.0768593 13.5544459,18.2497074 11.140549,18.2497074 C4.80108466,18.2497074 0,23.6659244 0,30.0693505 Z'
                id='Path'></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='feather feather-chevron-down'>
      <polyline points='6 9 12 15 18 9'></polyline>
    </svg>
  );
}

function ChevronUp() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='feather feather-chevron-up'>
      <polyline points='18 15 12 9 6 15'></polyline>
    </svg>
  );
}

type Props = {
  id: number;
  donator: Company;
  highlighted: boolean;
};

export default function DonatorCard({
  id,
  donator,
  highlighted = false,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='flex flex-col md:flex-row bg-light-800 rounded-3xl mb-5 overflow-hidden min-h-[140px]'>
        <div
          className={cn(
            'md:flex w-1/12 min-h-full justify-center items-center hidden',
            highlighted ? 'bg-primary text-white' : 'bg-light-600',
          )}>
          <span className='text-2xl'>{id}</span>
        </div>
        <div className='w-full flex flex-1 flex-col md:flex-row justify-around py-10 md:py-0'>
          <div className='md:w-6/12 flex flex-col md:flex-row h-full items-center gap-5 px-10 md:px-10'>
            <div className='flex justify-center items-center bg-light-600 rounded-full md:size-[100px] size-[134px]'>
              <ProfilePlaceholder />
            </div>
            <h3 className='text-3xl md:text-2xl truncate text-center md:text-left w-[300px]'>
              {donator.name}
            </h3>
          </div>
          <div className='flex-1 mt-5 md:mt-0 flex flex-col md:flex-row items-center justify-end divide-y md:divide-y-0 divide-gray-300 md:divide-x px-6 md:px-0'>
            <div className='w-full py-5 md:px-6 md:py-0'>
              <StatsWidget
                subText={`Всего пожертвовано`}
                subTextSize={
                  'md'
                }>{`${donator.invested.formatted}`}</StatsWidget>
            </div>
            <div className='w-full py-5 md:px-6 md:py-0'>
              <StatsWidget
                subText={`Проспонсировано`}
                subTextSize={
                  'md'
                }>{`${donator.projectsCount} ${formatNoun(donator.projectsCount, 'проект', 'проекта', 'проектов')}`}</StatsWidget>
            </div>
          </div>
        </div>
        <div className='w-[170px] md:flex justify-center items-center hidden'>
          <button
            onClick={() => {
              setOpen(!open);
            }}
            className='size-[68px] rounded-full bg-light-600 flex items-center justify-center'>
            {open ? <ChevronDown /> : <ChevronUp />}
          </button>
        </div>
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className='flex md:hidden justify-center items-center bg-light-600 py-5 flex gap-3'>
          Список пожертвований {open ? <ChevronDown /> : <ChevronUp />}
        </button>
      </div>

      {open && (
        <div className='p-10'>
          <DonatorInvestmentTable donator={donator} />
        </div>
      )}
    </>
  );
}

// <video
//     src={`/storage/videos/${item.filepath}`}
//     width='1440'
//     height='680'
//     controls
// />
