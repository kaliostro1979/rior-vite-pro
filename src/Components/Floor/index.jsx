import Trash from '@/assets/icons/trash.svg';
import React from "react";
import { useDispatch } from 'react-redux';
import { setFloorPlan, setFloorPlanUrl, setDesign, setDesignUrl } from '@/store/slices/steps';

export const Floor = props => {
  const { preview, fileType, type = 'floorPlan' } = props;
  const dispatch = useDispatch();

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
            <img src={Trash} className={'w-full h-full'} alt="Remove file" />
          </div>
        </button>

        {
          fileType === "pdf" ? <iframe src={preview} width={"100%"} height={"100%"}></iframe> : <img src={preview} alt="" className={ 'absolute top-0 left-0 w-full h-full object-contain object-center'}/>
        }
      </div>
    </div>
  );
};
