import { useState, useEffect } from "react";
import axios from "axios";
function promiseWrapper(promise) {
  let status = "pending";
  let result;
  const s = promise.then(
    (value) => {
      status = "success";
      result = value;
    },
    (error) => {
      status = "error";
      result = error;
    }
  );
  return () => {
    switch (status) {
      case "pending":
        throw s;
      case "success":
        return result;
      case "error":
        throw result;
      default:
        throw new Error("Unknown status");
    }
  };
}
function useGetDataPlain(url) {
  const [resource, setResource] = useState();
  useEffect(() => {
    const getData = async () => {
      const promise = axios.get(url).then((response) => response.data);
      setResource(promiseWrapper(promise));
    };
    getData();
  }, [url]);
  return resource;
}
function useGetData(url) {
  const [resource, setResource] = useState();
  useEffect(() => {
    const getData = async () => {
      const promise = axios.get(url).then((response) => response.data);
      setResource(promiseWrapper(promise));
    };
    getData();
  }, [url]);
  return resource;
}
export {
  useGetDataPlain as a,
  useGetData as u
};
