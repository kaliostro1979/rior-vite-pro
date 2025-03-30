import "../Buttons/buttons.scss"

const FileUploadInput = ({heading, subheading, id, labelText, size = "large", icon}) => {
    return (
        <div className={"flex justify-center items-center p-8 border border-dashed border-gray-label rounded-xl"} style={{maxWidth: size === "large" ? "100%" : "440px"}}>
            <div className={"flex flex-col items-center gap-y-3 max-w-[291px]"}>
                <div className={"w-[30px h-[30px]"}>
                    {icon}
                </div>
                <p className={"paragraph-large"}>{heading}</p>
                <span className={"paragraph-small text-gray"}>{subheading}</span>
                <input id={id} type={"file"} className={"w-0 h-0 invisible"}/>
                <label htmlFor={id} className={"button button-primary button__small"}>{labelText}</label>
            </div>
        </div>
    );
};

export default FileUploadInput;