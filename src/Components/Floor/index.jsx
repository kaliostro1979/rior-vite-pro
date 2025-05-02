import Trash from '@/assets/icons/trash.svg';
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { setFloorPlan, setFloorPlanUrl, setDesign, setDesignUrl } from '@/store/slices/steps';
import {CustomImage} from "@/Components/ui/index.js";

export const Floor = props => {
  const { preview, fileType, type = 'floorPlan' } = props;
  const dispatch = useDispatch();
 /* const [pdfDataUrl, setPdfDataUrl] = useState(null);
  const [error, setError] = useState(null);*/

 /* useEffect(() => {
    if (fileType === 'pdf' && preview) {
      fetch(preview)
          .then(response => response.blob())
          .then(blob => {
            const reader = new FileReader();
            reader.onloadend = () => {
              setPdfDataUrl(reader.result);
              setError(null);
            };
            reader.onerror = () => {
              setError('Error loading PDF');
            };
            reader.readAsDataURL(blob);
          })
          .catch(err => {
            console.error('Error loading PDF:', err);
            setError('Error loading PDF');
          });
    }
  }, [preview, fileType]);*/

  const handleRemove = () => {
    if (type === 'floorPlan') {
      dispatch(setFloorPlan(null));
      dispatch(setFloorPlanUrl(null));
    } else {
      dispatch(setDesign(null));
      dispatch(setDesignUrl(null));
    }
  };

  return (
      <div className={'max-w-[440px] mx-auto'}>
        <div className={'bg-gray-medium aspect-[22/25] relative'}>
          <button
              onClick={handleRemove}
              className={"w-10 h-10 flex flex-col justify-center items-center absolute bottom-4 right-4 rounded-lg border border-gray-border bg-gray-blurred cursor-pointer z-10"}
          >
            <div className={"w-5 h-5"}>
              <CustomImage src={Trash} alt={"Remove file"} classes={"w-full h-full"}/>
            </div>
          </button>

          {
            (
                <CustomImage src={preview} alt={"Floor preview"} classes={"absolute top-0 left-0 w-full h-full object-contain object-center"}/>
            )
          }
        </div>
      </div>
  );
};
