import { Link } from "react-router"
import LinkIcon from "@/assets/icons/link.svg"

export const ImageBanner = ({image, projectName, place, parameters, url, classes}) => {
    return (
        <div className={"relative w-full h-[177px] p-8 flex flex-col justify-end"}>
            <img src={image} alt="" className={classes}/>
            <div className={"relative flex items-center justify-between text-primary-white z-[1]"}>
                <div className={"flex items-center gap-x-[60px]"}>
                    <div className={"relative z-[1]"}>
                        <p>{projectName}</p>
                        <p>{place}</p>
                    </div>
                    <div className={"relative z-[1]"}>
                        <ul className={"flex items-center gap-x-2 text-primary-white"}>
                            {
                                parameters ? parameters.map((parameter)=>{
                                    return (
                                        <li>
                                            <div>
                                                <p>{parameter.title}</p>
                                                <p>{parameter.value}m<sup>2</sup></p>
                                            </div>
                                        </li>
                                    )
                                }) : null
                            }
                        </ul>
                    </div>
                </div>
                <div className={"flex items-center gap-x-1.5 text-primary-black"}>
                    <div className={"w-4 h-4"}>
                        <div style={{maskImage: url(`${LinkIcon}`)}}></div>
                    </div>
                    <Link to={url}>Copy URL</Link>
                </div>
            </div>
        </div>
    )
}

