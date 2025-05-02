import React, {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {uploadFloorPlan} from '@/store/actions/steps';
import {Floor} from '@/Components';
import Images from "@/assets/icons/pictures.svg";
import {CustomButton, CustomImage} from "@/Components/ui/index.js";

export const FloorPlanUploader = () => {
    const dispatch = useDispatch();
    const fileInputRef = useRef(null);

    const floorPlanUrl = useSelector(state => state.stepWizard.floorPlanUrl);
    const floorPlan = useSelector(state => state.stepWizard.floorPlan)

    if (floorPlanUrl) {
        var floorFileType = floorPlan.type.split('/')[1]
    }

    const floorPlanError = useSelector(state => state.stepWizard.errors.floorPlan);

    const handleFileChange = async e => {
        if (e.target.files && e.target.files[0]) {
            dispatch(uploadFloorPlan(e.target.files[0]));
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="max-w-[600px] mx-auto">
            {floorPlanUrl ? (
                <div className="mb-6">
                    <Floor preview={floorPlanUrl} fileType={floorFileType} type="floorPlan" />
                </div>
            ) : (
                <div className={"w-full flex justify-center"}>
                    <div className="file-upload__container flex flex-col justify-center items-center rounded-xl text-center cursor-pointer mb-6 w-[440px] h-[421px]"
                         onClick={handleButtonClick}
                    >
                        <div className={"flex flex-col justify-center items-center gap-y-3 mb-[22px]"}>
                            <div className={"w-[30px] h-[30px]"}>
                                <CustomImage src={Images} alt={""}/>
                            </div>
                            <p className="text-base leading-[22px] text-primary-black">Click to browse or drag and drop</p>
                            <p className="text-sm leading-[17px] text-gray">Image (Max 2MB)</p>
                        </div>
                        <CustomButton button_type={"primary"} type={"button"} text={"Upload"} size={"small"}/>
                    </div>
                </div>
            )}

            {/*{floorPlanError && <p className="text-red-500 mb-4">{floorPlanError}</p>}*/}

            <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept=".jpg,.png,.jpeg,.webp"
                onChange={handleFileChange}
                name={"interior_photo"}
            />
        </div>
    );
};
