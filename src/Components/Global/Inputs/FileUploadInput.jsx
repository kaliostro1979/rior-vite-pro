import "../Buttons/buttons.scss"
import {useEffect, useState} from "react";
import { useDispatch } from 'react-redux'



const FileUploadInput = ({heading, subheading, id, labelText, size = "large", icon, action}) => {
    const [file, setFile] = useState(null)
    const [preview, setPreview] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        if (file){
            const objectUrl = URL.createObjectURL(file)
            setPreview(objectUrl)
            if (action){
                //dispatch(action(objectUrl))
                dispatch(action(file))
            }

            return () => URL.revokeObjectURL(objectUrl)
        }
    }, [file, dispatch, action])

    const handleFilesChange = (event)=>{
        if (!event.target.files || event.target.files.length === 0) {
            setFile(null)
            return
        }
        setFile(event.target.files[0])
    }

    return (
        <div className={"flex justify-center items-center p-8 border border-dashed border-gray-label rounded-xl"} style={{maxWidth: size === "large" ? "100%" : "440px"}}>
            <div className={"flex flex-col items-center gap-y-3 max-w-[291px]"}>
                <div className={"w-[30px h-[30px]"}>
                    {icon}
                </div>
                <p className={"paragraph-large"}>{heading}</p>
                <span className={"paragraph-small text-gray"}>{subheading}</span>
                <input id={id} type={"file"} className={"w-0 h-0 invisible"} onChange={handleFilesChange}/>
                <label htmlFor={id} className={"button button-primary button__small"}>{labelText}</label>
                {file &&  <img src={preview} /> }
            </div>
        </div>
    );
};

export default FileUploadInput;