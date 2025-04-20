import {Link} from "react-router"
import LinkIcon from "@/assets/icons/link.svg"
import UploadIcon from "@/assets/icons/upload.svg"

export const ImageBanner = ({image, projectName, place, parameters, url, classes, callBack}) => {

    return (
        <div
            className={"relative w-full lg:h-[177px] h-[246px] p-8 flex flex-col justify-end lg:rounded-2xl overflow-hidden"}>
            <img src={image} alt="" className={classes}/>
            <div className={"w-full lg:hidden block absolute top-0 left-1/2 -translate-x-1/2 pt-[30px]"}>
                <div className={"w-full relative flex justify-center items-center"}>
                    <div className={"text-primary-white"}>
                        <p className={"text-primary-white opacity-60"}>{projectName}</p>
                        <p>{place}</p>
                    </div>
                    <div
                        className={"rounded-md gap-y-1.5 bg-gray-blurred-dark backdrop-blur-xs w-9 h-9 flex flex-col justify-center items-center absolute top-1/2 -translate-y-1/2 right-6"}>
                        <button className={"block w-5 h-5 upload-icon bg-primary-white"}
                                style={{
                                    WebkitMaskImage: `url("${UploadIcon}")`,
                                    WebkitMaskSize: "cover",
                                    WebkitMaskRepeat: "no-repeat",
                                    maskImage: `url("${UploadIcon}")`,
                                    maskSize: "cover",
                                    maskRepeat: "no-repeat",
                                }}
                                onClick={(event) => {
                                    event.preventDefault()
                                    callBack()
                                }}
                        >
                        </button>
                    </div>
                </div>
            </div>
            <div className={"relative flex items-center lg:justify-between justify-end text-primary-white z-[1]"}>
                <div className={"lg:flex hidden items-center gap-x-[60px]"}>
                    <div className={"relative z-[1]"}>
                        <p className={"text-primary-white opacity-60"}>{projectName}</p>
                        <p>{place}</p>
                    </div>
                    <div className={"relative z-[1]"}>
                        <ul className={"flex items-center gap-x-2 text-primary-white"}>
                            <li className={"px-3 py-1.5 rounded-md gap-y-1.5 bg-gray-blurred-dark backdrop-blur-xs min-h-[52px] min-w-[86px] flex flex-col justify-center items-center"}>
                                <button className={"block w-5 h-5 upload-icon bg-primary-white"}
                                        style={{
                                            WebkitMaskImage: `url("${UploadIcon}")`,
                                            WebkitMaskSize: "cover",
                                            WebkitMaskRepeat: "no-repeat",
                                            maskImage: `url("${UploadIcon}")`,
                                            maskSize: "cover",
                                            maskRepeat: "no-repeat",
                                        }}
                                        onClick={(event) => {
                                            event.preventDefault()
                                            callBack()
                                        }}
                                >
                                </button>
                            </li>
                            {
                                parameters ? parameters.map((parameter) => {
                                    return (
                                        <li key={parameter.id}
                                            className={"px-3 py-1.5 rounded-md flex flex-col items-start gap-y-1.5 bg-gray-blurred-dark backdrop-blur-xs min-h-[52px] min-w-[86px]"}>
                                            <p className={"text-[11px] leading-none"}>{parameter.title}</p>
                                            <p className={"paragraph"}>{parameter.value}</p>
                                        </li>
                                    )
                                }) : null
                            }
                        </ul>
                    </div>
                </div>
                <div
                    className={"flex items-center gap-x-1.5 text-primary-black bg-primary-white py-1.5 px-3 rounded-lg overflow-hidden"}>
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

