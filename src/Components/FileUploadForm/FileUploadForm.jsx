import FileUploadInput from "../Global/Inputs/FileUploadInput.jsx";
import UploadFileIcon from "../Global/Icons/UploadFileIcon.jsx";


const FileUploadForm = () => {
    return (
        <form>
            <FileUploadInput
                heading={"Upload a plan or explore inspirations—click 'Upload' or drag and drop."}
                labelText={"Upload"}
                subheading={"PDF or PNG"}
                size={"large"}
                icon={<UploadFileIcon className={"w-full h-full"}/>}
                id={"step-1"}
            />
        </form>
    );
};

export default FileUploadForm;