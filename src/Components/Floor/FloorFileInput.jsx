import React from 'react';
import UploadFileIcon from "../Global/Icons/UploadFileIcon.jsx";
import {getFloorPlan} from "../../features/steps/wizardStepsSlice.js";
import FileUploadInput from "../Global/Inputs/FileUploadInput.jsx";

const FloorFileInput = () => {
    return (
        <FileUploadInput
            heading={"Upload a plan or explore inspirations—click 'Upload' or drag and drop."}
            labelText={"Upload"}
            subheading={"PDF or PNG"}
            size={"large"}
            icon={<UploadFileIcon className={"w-full h-full"}/>}
            id={"step-floor"}
            action={getFloorPlan}
        />
    );
};

export default FloorFileInput;