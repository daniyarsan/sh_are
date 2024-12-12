import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import React from 'react';

type Option = {
  label: string;
  value: string;
};

type Props = {
  label: string;
  defaultValue: string;
  options: Option[];
  onChange: (value: string) => void;
};

export default function SelectFilter({
  label,
  defaultValue,
  options,
  onChange,
}: Props) {
  return (
    <div className='flex flex-row items-center gap-5'>
      {label && <label>{label}</label>}

      <Select onValueChange={onChange} defaultValue={defaultValue || undefined}>
        <SelectTrigger className={`rounded-md border px-10 h-10`}>
          <div className='line-clamp-1 flex-1 text-left'>
            <SelectValue placeholder='Выбрать' />
          </div>
        </SelectTrigger>
        <SelectContent className='border-none'>
          <SelectGroup>
            {options.map((item) => (
              <SelectItem
                key={item.value}
                value={item.value}
                className='cursor-pointer focus:bg-light-800 dark:focus:bbg-dark-700'>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
