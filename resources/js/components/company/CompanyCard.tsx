import { useState } from 'react';
import ProfileAvatar from '@/components/profile/ProfileAvatar';
import CompanyStats from '@/components/company/CompanyStats';
import Button from '@/components/_elements/Button';
import CompanyInvestmentsTable from '@/components/CompanyInvestmentsTable';
import { Link } from '@inertiajs/react';
import { Company } from '@/types';
import React from 'react';

type Props = {
  company: Company;
  index: number;
};

export default function CompanyCard({ company, index }: Props) {
  const [opened, setOpened] = useState(false);

  return (
    <div className='bg-semiLight rounded-2xl py-10'>
      <div className='grid min-h-[30vh] grid-cols-1 divide-gray-300 md:grid-cols-3 md:divide-x'>
        <div className='flex flex-col justify-center items-center md:text-center space-y-7 px-10'>
          <ProfileAvatar className='size-36' image={company.image_path} />
          <div className='flex flex-col justify-end items-center w-8/12'>
            <h3 className='uppercase'>
              <Link href={route('company.one', company.slug)}>
                {company.name}
              </Link>
            </h3>
            <span className='mx-5 text-md text-primary text-bold text-xl font-light'>
              № {index}
            </span>
          </div>
          <p>{company.description}</p>
        </div>
        <div className='flex flex-col col-span-2 justify-center px-10 md:px-16 bg-light-xl md:bg-transparent py-10 rounded-2xl md:rounded-none space-y-10'>
          <CompanyStats company={company} />
          <Button
            onClick={() => {
              setOpened(!opened);
            }}>
            Read more
          </Button>
        </div>
      </div>

      {opened && (
        <div className='p-10'>
          <CompanyInvestmentsTable company={company} dark={true} />
        </div>
      )}
    </div>
  );
}
