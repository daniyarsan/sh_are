import React from 'react';
import clsx from 'clsx';

const statusSet = {
  new: { text: '● voting', styles: 'bg-blue-500' },
  active: { text: '● in progress', styles: 'bg-gray-500' },
  finished: { text: '✔ done', styles: 'bg-primary' },
};

type ActiveIndicatorProps = {
  status: 'new' | 'active' | 'finished';
  className: string;
};

export default function ActiveIndicator({
  status,
  className,
}: ActiveIndicatorProps) {
  const style = clsx(
    className,
    statusSet[status].styles,
    statusSet[status].styles ? 'text-secondary' : 'text-white',
    'm-2',
  );
  return <div className={style}>{statusSet[status].text}</div>;
}
