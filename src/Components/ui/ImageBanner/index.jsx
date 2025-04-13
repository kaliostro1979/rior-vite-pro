import { Link } from "react-router"
import LinkIcon from "@/assets/icons/link.svg"
import UploadIcon from "@/assets/icons/upload.svg"

export const ImageBanner = ({image, projectName, place, parameters, url, classes}) => {
    return (
        <div className={"relative w-full h-[177px] p-8 flex flex-col justify-end rounded-2xl overflow-hidden"}>
            <img src={image} alt="" className={classes}/>
            <div className={"relative flex items-center justify-between text-primary-white z-[1]"}>
                <div className={"flex items-center gap-x-[60px]"}>
                    <div className={"relative z-[1]"}>
                        <p className={"text-primary-white opacity-60"}>{projectName}</p>
                        <p>{place}</p>
                    </div>
                    <div className={"relative z-[1]"}>
                        <ul className={"flex items-center gap-x-2 text-primary-white"}>
                            <li className={"px-3 py-1.5 rounded-md gap-y-1.5 bg-gray-blurred-dark backdrop-blur-xs min-h-[52px] min-w-[86px] flex flex-col justify-center items-center"}>
                                <div className={"w-5 h-5 upload-icon bg-primary-white"}
                                     style={{
                                         WebkitMaskImage: `url("${UploadIcon}")`,
                                         WebkitMaskSize: "cover",
                                         WebkitMaskRepeat: "no-repeat",
                                         maskImage: `url("${UploadIcon}")`,
                                         maskSize: "cover",
                                         maskRepeat: "no-repeat",
                                     }}
                                >
                                </div>
                            </li>
                            {
                                parameters ? parameters.map((parameter)=>{
                                    return (
                                        <li key={parameter.id} className={"px-3 py-1.5 rounded-md flex flex-col items-start gap-y-1.5 bg-gray-blurred-dark backdrop-blur-xs min-h-[52px] min-w-[86px]"}>
                                            <p className={"text-[11px] leading-none"}>{parameter.title}</p>
                                            <p className={"paragraph"}>{parameter.value}</p>
                                        </li>
                                    )
                                }) : null
                            }
                        </ul>
                    </div>
                </div>
                <div className={"flex items-center gap-x-1.5 text-primary-black bg-primary-white py-1.5 px-3 rounded-lg overflow-hidden"}>
                    <div className={"w-4 h-4 bg-primary-black"}
                         style={{
                             WebkitMaskImage: `url("${LinkIcon}")`,
                             WebkitMaskSize: "cover",
                             WebkitMaskRepeat: "no-repeat",
                             maskImage: `url("${LinkIcon}")`,
                             maskSize: "cover",
                             maskRepeat: "no-repeat",
                         }}></div>
                    <Link to={url} className={"paragraph-small"}>Copy URL</Link>
                </div>
            </div>
        </div>
    )
}

