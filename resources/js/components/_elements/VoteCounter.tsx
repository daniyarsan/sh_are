import React from 'react';
import { formatNoun, number_format } from '@/lib/utils.js';
import clsx from 'clsx';

type VoteCounterProps = {
  count: number;
  total: number;
  dark?: boolean;
  className?: string;
};

export default function VoteCounter({
  count,
  total,
  dark = false,
  className,
}: VoteCounterProps) {
  const style = clsx(className, dark ? 'text-secondary' : 'text-white', 'm-2');

  return (
    <span className={style}>
      {number_format(count, 0, ',', ' ')}
      {total && ` / ${number_format(total, 0, ',', ' ')}`}{' '}
      {formatNoun(count, 'votes', 'votes', 'votes')}
    </span>
  );
}
