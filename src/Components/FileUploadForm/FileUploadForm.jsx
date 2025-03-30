import FileUploadInput from "../Global/Inputs/FileUploadInput.jsx";
import UploadFileIcon from "../Global/Icons/UploadFileIcon.jsx";
import {useSelector} from "react-redux";


const FileUploadForm = () => {
    const step = useSelector((state)=> state.stepWizard.step)

    const handleSubmit = (event)=>{
        event.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}>
            <FileUploadInput
                heading={"Upload a plan or explore inspirations—click 'Upload' or drag and drop."}
                labelText={"Upload"}
                subheading={"PDF or PNG"}
                size={"large"}
                icon={<UploadFileIcon className={"w-full h-full"}/>}
                id={"step-" + step}
                step={step}
            />
        </form>
    );
};

export default FileUploadForm;