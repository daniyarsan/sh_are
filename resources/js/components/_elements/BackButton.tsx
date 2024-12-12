import React from 'react';

export default function BackButton({
  className,
  children,
}: {
  className: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      className={className}
      onClick={() => {
        window.history.back();
      }}>
      {children}
    </a>
  );
}
