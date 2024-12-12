// src/useGetData.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ApiResponse } from '@/types';

type PromiseStatus = 'pending' | 'success' | 'error';

function promiseWrapper<T>(promise: Promise<T>): () => T {
  let status: PromiseStatus = 'pending';
  let result: T;

  const s = promise.then(
    (value: T) => {
      status = 'success';
      result = value;
    },
    (error) => {
      status = 'error';
      result = error;
    },
  );

  return () => {
    switch (status) {
      case 'pending':
        throw s;
      case 'success':
        return result;
      case 'error':
        throw result;
      default:
        throw new Error('Unknown status');
    }
  };
}

export function useGetDataPlain<T>(url: string) {
  const [resource, setResource] = useState<T>();

  useEffect(() => {
    const getData = async () => {
      const promise = axios.get(url).then((response) => response.data);
      setResource(promiseWrapper(promise));
    };

    getData();
  }, [url]);

  return resource;
}

function useGetData<T>(url: string) {
  const [resource, setResource] = useState<ApiResponse<T>>();

  useEffect(() => {
    const getData = async () => {
      const promise = axios.get(url).then((response) => response.data);
      setResource(promiseWrapper(promise));
    };

    getData();
  }, [url]);

  return resource;
}

export default useGetData;
