import Button from "../Global/Buttons/Button.jsx";

const FloorPreview = ({preview, setStep}) => {

    return (
        <div className={"max-w-[440px] mx-auto"}>
            <div className={"bg-gray-medium aspect-[22/25] relative"}>
                <img src={preview} alt="" className={"absolute top-0 left-0 w-full h-full object-contain object-center"}/>
            </div>
            <Button button_type={"primary"} size={"large"} type={"button"} text={"Next"} callback={()=>setStep(2)}/>
        </div>
    );
};

export default FloorPreview;