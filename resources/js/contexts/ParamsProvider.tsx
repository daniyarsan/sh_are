import React, { createContext, useState } from 'react';
import { generateRandomString } from '@/lib/utils';

// Define the type for the context
export interface LoadingContextType {
  voteIdentifier: string;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context with the correct type or `undefined` as default
export const ParamsContext = createContext<LoadingContextType | undefined>(
  undefined,
);

// Define the provider component
export const ParamsProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(false);
  // Generate a random string and store it in localStorage
  const voteIdentifierKey = 'voteIdentifier';
  let voteIdentifier = localStorage.getItem(voteIdentifierKey);

  if (!voteIdentifier) {
    voteIdentifier = generateRandomString(16); // Adjust length as needed
    localStorage.setItem(voteIdentifierKey, voteIdentifier);
  }

  return (
    <ParamsContext.Provider value={{ voteIdentifier, loading, setLoading }}>
      {children}
    </ParamsContext.Provider>
  );
};
