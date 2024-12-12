import React from 'react';
import Btc from '@/components/_elements/icons/Btc';
import ClipboardCopy from '@/components/_elements/clipboard/ClipboardCopy';

export default function CallToInvest() {
  return (
    <div className='space-y-10'>
      <h3>
        Вы тоже можете поддержать данный проект — нам важен вклад каждого!
      </h3>
      <p>
        Переведите сумму, которую вы посчитаете нужным, на биткоин-кошелек Лиги
        Выдающихся Джентльменов, который представлен ниже. Мы гарантируем, что
        100% средств будет направлено на финансирование данного проекта.{' '}
      </p>

      <div className='flex flex-col justify-between rounded-3xl bg-gray-100 p-5 md:flex-row'>
        <div className='mb-5 flex items-center md:mb-0 md:flex-row'>
          <Btc className='me-7 h-[30px] md:h-[30px]' />
          <span className='block items-center truncate text-md font-medium md:text-lg'>
            38AwyYdyrG8yesfNjFKEQETaNu9nPWtwsj
          </span>
        </div>

        <ClipboardCopy text='38AwyYdyrG8yesfNjFKEQETaNu9nPWtwsj'>
          <button className='clickable rounded-2xl bg-default p-6 text-center text-sm text-white md:px-10 md:py-4'>
            Копировать
          </button>
        </ClipboardCopy>
      </div>
    </div>
  );
}
