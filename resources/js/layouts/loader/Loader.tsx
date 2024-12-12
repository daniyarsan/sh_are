import React from 'react';
import {Loader2, LoaderCircle} from "lucide-react";

export default function Loader() {
  return (
    <div className='fixed w-full h-screen z-50 bg-opacity-70 bg-white flex items-center justify-center'>
        <LoaderCircle className="size-20 animate-spin-slow fill-primary drop-shadow" />
    </div>
  );
}
