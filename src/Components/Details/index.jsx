import BackArrow from "@/assets/icons/back-arrow.svg"
import CloseIcon from "@/assets/icons/close-black.svg"
import MainImage from "@/assets/images/main-image.jpg"
import FloorPlan from "@/assets/images/floor-plan.png"
import {CustomInput} from "@/Components/ui/index.js";
import {useEffect} from "react";

export const DetailsModal = (props) => {
    const {modalIsOpen, callback} = props

    useEffect(() => {
        if(modalIsOpen){
            document.body.classList.add("overflow-hidden")
        }else {
            document.body.classList.remove("overflow-hidden")
        }
    }, [modalIsOpen])

    return (
        <div className={`fixed top-0 right-0 z-20 h-screen w-full bg-primary-white transition-all duration-500 ${ modalIsOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className={"relative flex flex-col lg:justify-center items-center w-full h-full overflow-auto"}>
                <div className={"lg:hidden flex items-center justify-center pt-[30px] pb-2 px-6 w-full sticky top-0 bg-primary-white z-10"}>
                    <span className={"inline-block grow text-center"}>Details</span>
                    <button className={"w-9 h-9 rounded-md flex flex-col justify-center items-center bg-gray-light"}  onClick={callback}>
                        <img src={CloseIcon} alt=""/>
                    </button>
                </div>
                <div className={"grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-x-[72px] lg:gap-y-0 gap-y-6 p-6 lg:w-auto w-full"}>
                    <div className={"lg:max-w-[440px] max-w-full flex flex-col gap-y-4"}>
                        <CustomInput label={"Project Name"} value={"MyDream Home"} type={"text"} disabled={true} customClass={"lg:hidden inline-block"}/>
                        <div className={"lg:aspect-[22/19] aspect-[329/152] w-full relative lg:rounded-2xl  rounded-lg overflow-hidden"}>
                            <img src={MainImage} alt="" className={"absolute top-0 left-0 w-full h-full object-cover object-center"}/>
                        </div>
                        <div className={"lg:aspect-[11/4] aspect-[329/155] flex flex-col items-center justify-center bg-gray-medium-light lg:rounded-2xl rounded-lg overflow-hidden lg:border-0 border border-dashed"}>
                            <img src={FloorPlan} alt=""/>
                        </div>
                    </div>
                    <div className={"lg:min-w-[440px] lg:max-w-[440px] max-w-full"}>
                        <div className={"lg:block hidden py-2.5 mb-7"}>
                            <button onClick={callback} className={"flex items-center gap-x-1"}>
                                <span className={"w-6 h-6"}>
                                    <img src={BackArrow} alt=""/>
                                </span>
                                <span>Back</span>
                            </button>
                        </div>
                        <div className={"flex flex-col gap-y-6"}>
                            <CustomInput label={"Total price"} value={"$2540"} type={"text"} disabled={true} customClass={"font-bold"}/>
                            <CustomInput label={"Project Name"} value={"MyDream Home"} type={"text"} disabled={true} customClass={"lg:inline-block hidden"}/>
                            <CustomInput label={"Sealing Height"} value={2.7} type={"number"} disabled={true}/>
                            <CustomInput label={"Door Width"} value={0.9} type={"number"} disabled={true}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};