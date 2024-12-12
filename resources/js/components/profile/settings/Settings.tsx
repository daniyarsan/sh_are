import React, { useState } from 'react';
import SettingsProfileForm from '@/components/profile/settings/SettingsProfileForm';
import SettingsPasswordForm from '@/components/profile/settings/SettingsPasswordForm';
import SettingsTwoFactorForm from '@/components/profile/settings/SettingsTwoFactorForm';

type SettingsBlock = {
  title: string;
  component: React.ReactNode;
};

export default function Settings() {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const settingsBlocks: SettingsBlock[] = [
    {
      title: 'Профиль',
      component: <SettingsProfileForm />,
    },
    {
      title: 'Смена пароля',
      component: <SettingsPasswordForm />,
    },
    {
      title: 'Настройка 2FA',
      component: <SettingsTwoFactorForm />,
    },
  ];

  return (
    <div className='md:w-[1000px] md:min-h-[450px]'>
      <div className='relative grid grid-cols-1 divide-gray-300 md:grid-cols-5 md:divide-x h-full gap-10 md:gap-0'>
        <div className='col-span-2 justify-between items-center md:pr-5 px-0 h-full flex flex-col'>
          <div className='flex flex-col md:space-y-2 w-full'>
            {settingsBlocks.map((item, index) => (
              <div
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-full cursor-pointer rounded-xl p-5 text-lg font-medium ${
                  index === currentPage ? 'bg-primary text-light-700' : ''
                }`}>
                {item.title}
              </div>
            ))}
          </div>
        </div>

        <div className='col-span-3 md:px-10 relative p-5 md:p-0'>
          {settingsBlocks[currentPage].component}
        </div>
      </div>
    </div>
  );
}
