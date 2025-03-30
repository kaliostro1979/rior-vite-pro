import React from 'react';
import {useSelector} from "react-redux";
import "../../styles/global/wizard.scss"
import UploadFileIcon from "../../Components/Global/Icons/UploadFileIcon.jsx";
import {getDesign, getFloorPlan} from "../../features/steps/wizardStepsSlice.js";
import FileUploadInput from "../../Components/Global/Inputs/FileUploadInput.jsx";
import ImagesIcon from "../../Components/Global/Icons/ImagesIcon.jsx";

const Wizard = () => {
    const step = useSelector((state) => state.stepWizard.step)

    const floorPlan = useSelector((state) => state.stepWizard.floorPlan)
    const design = useSelector((state) => state.stepWizard.design)

    const handleSubmit = async (event) => {
        const formData = new FormData(event.target)
        formData.append("floorPlan", floorPlan)
        formData.append("design", design)
        event.preventDefault()
        await fetch("http://localhost:5173/", {
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data"
            },
            body: formData
        })
    }

    return (
        <>
            <div className={"wizard-steps__container"}>
                <ul className={"flex justify-between items-baseline gap-x-5"}>
                    <li className={"wizard-steps__item"}>
                        <div className={"wizard-steps__item-step-wrapper"}>
                            <span className={"wizard-steps__item-step " + (floorPlan ? 'active' : '')}>1</span>
                        </div>
                        <div className={"flex flex-col items-start gap-y-2"}>
                            <p className={"paragraph"}>Upload floor plan</p>
                            <p className={"paragraph text-gray-border-light"}>Browse PDF or PNG file of your floor
                                plan</p>
                        </div>
                    </li>
                    <li className={"wizard-steps__item"}>
                        <div className={"wizard-steps__item-step-wrapper"}>
                            <span className={"wizard-steps__item-step " + (design ? 'active' : '')}>2</span>
                        </div>
                        <div>
                            <p>Upload Design</p>
                        </div>
                    </li>
                    <li className={"wizard-steps__item"}>
                        <div className={"wizard-steps__item-step-wrapper"}>
                            <span className={"wizard-steps__item-step "}>3</span>
                        </div>

                        <div>
                            <p>Add Details</p>
                        </div>
                    </li>
                </ul>
                <form onSubmit={handleSubmit}>
                    <FileUploadInput
                        heading={"Upload a plan or explore inspirations—click 'Upload' or drag and drop."}
                        labelText={"Upload"}
                        subheading={"PDF or PNG"}
                        size={"small"}
                        icon={<ImagesIcon className={"w-full h-full"}/>}
                        id={"step-floor"}
                        action={getDesign}
                    />
                </form>
            </div>
        </>
    );
};

export default Wizard;