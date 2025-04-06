import React, {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {uploadDesign} from '@/store/actions/steps';
import {Floor} from '@/Components';

import Images from "@/assets/icons/pictures.svg"
import {CustomButton} from "@/Components/ui/index.js";

export const DesignUploader = () => {
    const dispatch = useDispatch();
    const fileInputRef = useRef(null);

    const designUrl = useSelector(state => state.stepWizard.designUrl);
    const design = useSelector(state => state.stepWizard.design)

    if (design) {
        var designFileType = design.type.split('/')[1]
    }

    const designError = useSelector(state => state.stepWizard.errors.design);

    const handleFileChange = async e => {
        if (e.target.files && e.target.files[0]) {
            dispatch(uploadDesign(e.target.files[0]));
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="max-w-[600px] mx-auto">
            {designUrl ? (
                <div className="mb-6">
                    <Floor preview={designUrl} fileType={designFileType} type="design" />
                </div>
            ) : (
               <div className={"w-full flex justify-center"}>
                   <div className="file-upload__container flex flex-col justify-center items-center rounded-xl text-center cursor-pointer mb-6 w-[440px] h-[421px]"
                       onClick={handleButtonClick}
                   >
                       <div className={"flex flex-col justify-center items-center gap-y-3 mb-[22px]"}>
                           <div className={"w-[30px] h-[30px]"}>
                               <img src={Images} alt=""/>
                           </div>
                           <p className="text-base leading-[22px] text-primary-black">Click to browse or drag and drop</p>
                           <p className="text-sm leading-[17px] text-gray">PDF or PNG (Max 2MB)</p>
                       </div>
                       <CustomButton button_type={"primary"} type={"button"} text={"Upload"} size={"small"}/>
                   </div>
               </div>
            )}

           {/* {designError && <p className="text-red-500 mb-4">{designError}</p>}*/}

            <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept=".pdf,.png"
                onChange={handleFileChange}
            />
        </div>
    );
};
