import React from 'react';
import StatsWidget from '@/components/_elements/StatsWidget';
import { Industry } from '@/types';

export default function IndustryBlock({
  industries,
}: {
  industries: Industry[];
}) {
  return (
    <section>
      <h1>Areas</h1>

      <div className='mt-10'>
        <div className='flex flex-col'>
          <div className='sm:grid md:divide-x xl:grid-cols-4'>
            {industries.map((industry, index) => {
              if (industry.hidden) {
                return null;
              }
              return (
                <div
                  key={index}
                  className='mt-10 flex flex-col xs:px-2 md:mt-0 md:px-10 mb-10'>
                  <div key={industry.id} className='grow'>
                    <div className='mb-10'>
                      <h3 className='py-5 text-[24px] font-medium text-default'>
                        {industry.name}
                      </h3>
                      <ul role='list' className='space-y-2 divide-y'>
                        {industry.categories.map((category) => {
                          return (
                            <li key={category.id} className='py-3'>
                              <span className='text-base text-slate-700'>
                                {category.name}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>

                  <StatsWidget subText='Всего пожертвовано'>
                    {industry.invested.formatted}
                  </StatsWidget>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
