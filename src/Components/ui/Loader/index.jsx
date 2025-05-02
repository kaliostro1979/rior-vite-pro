import React from 'react';
import Preloader from '@/assets/icons/loader.svg';
import {CustomImage} from "@/Components/ui/index.js";

export const Loader = ({
  fullPage = false,
  message = '',
  className,
}) => {

  return (
      <div className={`loader-container ${ fullPage ? 'fixed inset-0 bg-black/30 flex flex-col items-center justify-center z-50' : ''} ${className}`}>
        <div className={"lg:w-16 w-10 lg:h-16 h-10"}>
            <CustomImage src={Preloader} alt={"Preloader"}/>
        </div>
        { message && <p className="mt-4 text-center text-gray-600">{message}</p>}
      </div>
  );
};
