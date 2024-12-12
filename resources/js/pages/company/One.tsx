import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import BackButton from '@/components/_elements/BackButton';
import { Head } from '@inertiajs/react';
import Wallet from '@/components/_elements/Wallet';
import CompanyInvestmentsTable from '@/components/CompanyInvestmentsTable';
import { Company } from '@/types';

export default function One({ company }: { company: Company }) {
  const title = company.name;
  const wallet = company.address;

  return (
    <MainLayout>
      <Head title={title} />
      <section className='space-y-20 px-5'>
        <div className='md:mx-auto'>
          <BackButton className='my-10 block cursor-pointer text-gray-500'>{`< Назад`}</BackButton>
        </div>
        <div className='flex flex-col md:flex-row items-center space-y-10 justify-between'>
          <div className='w-8/12 md:w-3/12'>
            {company.image_path && (
              <img
                className='w-full'
                src={`/storage/images/${company.image_path}`}
                alt=''
              />
            )}
          </div>
          <div className='flex flex-col md:w-8/12 md:gap-4 space-y-10'>
            <div className='flex flex-row items-center gap-5'>
              <h1 className=''>{company.name}</h1>
              <span className='text-primary text-2xl'>/ №1</span>
            </div>
            <p className=''>{company.description}</p>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 bg-gray-200 rounded-2xl p-10 divide-y md:divide-y-0 md:divide-x divide-gray-400'>
          <div className='flex flex-col py-7 md:px-10'>
            <div className='text-primary text-xl'>
              {company.invested.formatted}
            </div>
            <div>Всего пожертвовано</div>
          </div>

          <div className='flex flex-col py-7 md:px-10'>
            <div className='text-primary text-xl'>{company.created_at}</div>
            <div>Дата вступления в Лигу</div>
          </div>

          <div className='flex flex-col py-7 md:px-10'>
            <div className='text-primary text-xl'>
              {wallet && <Wallet wallet={wallet} />}
            </div>
            <div>Благотворительный кошелек</div>
          </div>
        </div>

        <CompanyInvestmentsTable company={company} />
      </section>
    </MainLayout>
  );
}
