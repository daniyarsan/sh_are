import React from 'react';
import { ToastContainer } from 'react-toastify';

export default function ToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const contextClass = {
    success: 'bg-primary',
    error: 'bg-red-600',
    info: 'bg-gray-600',
    warning: 'bg-dark-700',
    default: 'bg-indigo-600',
    dark: 'bg-white-600 font-gray-300',
  };

  return (
    <>
      {children}
      <ToastContainer
        toastClassName={(context) =>
          contextClass[context?.type || 'default'] +
          ' flex flex-row justify-between cursor-pointer p-3'
        }
        bodyClassName={() =>
          'flex flex-row justify-around  font-white block p-2'
        }
      />
    </>
  );
}
