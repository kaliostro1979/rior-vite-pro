import FloorFileInput from "../Floor/FloorFileInput.jsx";
import FloorPreview from "../Floor/FloorPreview.jsx";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {getFloorPlan} from "../../features/steps/wizardStepsSlice.js";

const FileUploadForm = () => {
    const [step, setStep] = useState(1)
    const floorPlan = useSelector((state) => state.stepWizard.floorPlan)
    const design = useSelector((state) => state.stepWizard.design)
   /* const step = useSelector((state) => state.stepWizard.step)*/

    const [preview, setPreview] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        if (floorPlan){
            const objectUrl = URL.createObjectURL(floorPlan)
            setPreview(objectUrl)
            dispatch(getFloorPlan(floorPlan))
            setStep(1)

            return () => URL.revokeObjectURL(objectUrl)
        }
    }, [floorPlan, dispatch])

    return (
        <>
            {
                floorPlan || design ?
                    <>
                        <div className={"wizard-steps__container"}>
                            <ul className={"flex justify-between items-baseline gap-x-5"}>
                                <li className={"wizard-steps__item"}>
                                    <div className={"wizard-steps__item-step-wrapper"}>
                                        <span className={"wizard-steps__item-step " + (floorPlan && step === 1 ? 'active' : floorPlan && step !== 1 ? 'filled' : '' )}>1</span>
                                    </div>
                                    <div className={"flex flex-col items-start gap-y-2"}>
                                        <p className={"paragraph"}>Upload floor plan</p>
                                        <p className={"paragraph text-gray-border-light"}>Browse PDF or PNG file of your floor plan</p>
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
                        </div>
                        {
                            preview ? <FloorPreview preview={preview} setStep={setStep}/> : null
                        }
                    </> : null
            }

            {
                !preview && !design && <FloorFileInput/>
            }
        </>
    );
};

export default FileUploadForm;