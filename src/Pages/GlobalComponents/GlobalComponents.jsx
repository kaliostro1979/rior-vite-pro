import React from 'react';
import Button from "../../Components/Global/Buttons/Button";
import InputSimple from "../../Components/Global/Inputs/InputSimple";
import InputFile from "../../Components/Global/Inputs/InputFile";
import CartIcon from "../../Components/Global/Icons/CartIcon";
import CloseIcon from "../../Components/Global/Icons/CloseIcon";
import FilterIcon from "../../Components/Global/Icons/FilterIcon";
import UploadFileIcon from "../../Components/Global/Icons/UploadFileIcon";
import ImagesIcon from "../../Components/Global/Icons/ImagesIcon";
import NotificationBellIcon from "../../Components/Global/Icons/NotificationBellIcon";
import PlusIcon from "../../Components/Global/Icons/PlusIcon";
import QuickAddIcon from "../../Components/Global/Icons/QuickAddIcon";
import RemoveIcon from "../../Components/Global/Icons/RemoveIcon";
import ReplaceIcon from "../../Components/Global/Icons/ReplaceIcon";
import SearchIcon from "../../Components/Global/Icons/SearchIcon";
import SortByIcon from "../../Components/Global/Icons/SortByIcon";
import WishlistIcon from "../../Components/Global/Icons/WishlistIcon";
import LinkIcon from "../../Components/Global/Icons/LinkIcon";
import ErrorIcon from "../../Components/Global/Icons/ErrorIcon";
import LoaderIcon from "../../Components/Global/Icons/LoaderIcon";


const GlobalComponents = () => {
    return (
        <div className={"container"} style={{padding: "80px 0"}}>
            <h1 style={{marginBottom: "40px"}}>Global components</h1>
            <div className={"mb-10"}>
                <strong className={"mb-4 underline"}>Colors</strong>
                <ul className={"grid grid-cols-4 gap-3"}>
                    <li className={"flex flex-col items-center justify-center gap-y-2"}>
                            <span
                                className={"block w-14 h-14 rounded-full border border-primary-black bg-primary-black"}></span>
                        <span>Primary black rgba(0, 0, 0, 1)</span>
                    </li>
                    <li className={"flex flex-col items-center justify-center gap-y-2"}>
                            <span
                                className={"block w-14 h-14 rounded-full border border-primary-black bg-primary-white"}></span>
                        <span>Primary white rgba(255, 255, 255, 1)</span>
                    </li>
                    <li className={"flex flex-col items-center justify-center gap-y-2"}>
                        <span className={"block w-14 h-14 rounded-full border border-primary-black bg-gray"}></span>
                        <span>Gray rgba(0, 0, 0, 0.5)</span>
                    </li>
                    <li className={"flex flex-col items-center justify-center gap-y-2"}>
                            <span
                                className={"block w-14 h-14 rounded-full border border-primary-black bg-gray-medium"}></span>
                        <span>Gray medium rgba(244, 244, 244, 1)</span>
                    </li>
                    <li className={"flex flex-col items-center justify-center gap-y-2"}>
                            <span
                                className={"block w-14 h-14 rounded-full border border-primary-black bg-gray-light"}></span>
                        <span>Gray light rgba(247, 248, 250, 1)</span>
                    </li>
                    <li className={"flex flex-col items-center justify-center gap-y-2"}>
                            <span
                                className={"block w-14 h-14 rounded-full border border-primary-black bg-gray-dark"}></span>
                        <span>Gray dark rgba(153, 153, 153, 1)</span>
                    </li>
                    <li className={"flex flex-col items-center justify-center gap-y-2"}>
                            <span
                                className={"block w-14 h-14 rounded-full border border-primary-black bg-gray-disabled"}></span>
                        <span>Gray disabled rgba(223, 223, 223, 1)</span>
                    </li>
                    <li className={"flex flex-col items-center justify-center gap-y-2"}>
                            <span
                                className={"block w-14 h-14 rounded-full border border-primary-black bg-gray-border"}></span>
                        <span>Gray border rgba(0, 0, 0, 0.1)</span>
                    </li>
                    <li className={"flex flex-col items-center justify-center gap-y-2"}>
                            <span
                                className={"block w-14 h-14 rounded-full border border-primary-black bg-gray-border-light"}></span>
                        <span>Gray border light rgba(0, 0, 0, 0.32)</span>
                    </li>
                    <li className={"flex flex-col items-center justify-center gap-y-2"}>
                            <span
                                className={"block w-14 h-14 rounded-full border border-primary-black bg-gray-label"}></span>
                        <span>Gray label rgba(0, 0, 0, 0.6)</span>
                    </li>
                    <li className={"flex flex-col items-center justify-center gap-y-2"}>
                            <span
                                className={"block w-14 h-14 rounded-full border border-primary-black bg-error-red"}></span>
                        <span>Error red rgba(229, 26, 26, 1)</span>
                    </li>
                    <li className={"flex flex-col items-center justify-center gap-y-2"}>
                            <span
                                className={"block w-14 h-14 rounded-full border border-primary-black bg-error-red-light"}></span>
                        <span>Error red light rgba(229, 26, 26, 0.1)</span>
                    </li>
                </ul>
            </div>
            <div className={"grid grid-cols-2"}>
                <div className={"flex flex-col gap-y-3"}>
                    <strong className={"mb-4 underline"}>Typography</strong>
                    <h1 className={"heading"}>Heading</h1>
                    <h1 className={"heading heading-strong"}>Heading Strong</h1>

                    <div className={"mt-10 flex flex-col gap-3"}>
                        <p className={"paragraph"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
                            ut.</p>
                        <p className={"paragraph paragraph-strong"}>Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                            Ducimus, ut.</p>
                        <p className={"paragraph paragraph-small"}>Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                            Ducimus, ut.</p>
                        <p className={"paragraph paragraph-large"}>Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                            Ducimus, ut.</p>
                    </div>
                </div>

                <div className={"flex flex-col gap-y-2"}>
                    <strong style={{display: "inline-block", margin: "8px 0"}}>Primary button (small)</strong>
                    <Button text={"Button Primary Small"}
                            callback={() => console.log("Clicked")}
                            size={"small"}
                            type={"primary"}
                            button_type={"primary"}/>

                    <strong style={{display: "inline-block", margin: "8px 0"}}>Primary button (small) -
                        disabled</strong>
                    <Button text={"Button Primary Small"}
                            callback={() => console.log("Clicked")}
                            size={"small"}
                            type={"primary"}
                            button_type={"primary"}
                            disabled={true}/>

                    <strong style={{display: "inline-block", margin: "8px 0"}}>Primary button (large)</strong>
                    <Button text={"Button Primary Large"}
                            callback={() => console.log("Clicked")}
                            size={"large"}
                            type={"primary"}
                            button_type={"primary"}/>

                    <strong style={{display: "inline-block", margin: "8px 0"}}>Secondary button (small)</strong>
                    <Button text={"Button Secondary Small"}
                            callback={() => console.log("Clicked")}
                            size={"small"}
                            type={"secondary"}
                            button_type={"secondary"}/>

                    <strong style={{display: "inline-block", margin: "8px 0"}}>Secondary button (large)</strong>
                    <Button text={"Button Secondary Large"}
                            callback={() => console.log("Clicked")}
                            size={"large"}
                            type={"secondary"}
                            button_type={"secondary"}/>

                    <strong style={{display: "inline-block", margin: "8px 0"}}>Secondary button (large) -
                        disabled</strong>
                    <Button text={"Button Secondary Large"}
                            callback={() => console.log("Clicked")}
                            size={"large"}
                            type={"secondary"}
                            button_type={"secondary"}
                            disabled={true}/>
                </div>

                <div className={"mt-10"}>
                    <ul style={{display: "flex", flexDirection: "column", gap: "12px"}}>
                        <li>
                            <InputSimple type={"text"} id={"simpleText"} placeholder={"Test placeholder"}
                                         label={"Test input"}/>
                        </li>
                        <li>
                            <InputSimple type={"text"} id={"simpleText"} placeholder={"Test placeholder"}
                                         label={"Test input"} disabled={true}/>
                        </li>
                        <li>
                            <InputSimple type={"text"} id={"simpleText"} placeholder={"Test placeholder"}
                                         label={"Test input"} errorMessage={"This field is required"}/>
                        </li>
                        <li>
                            <InputFile/>
                        </li>
                    </ul>
                </div>

                <div className={"mt-10"}>
                    <strong>Icons</strong>
                    <ul className={"grid grid-cols-5 gap-5 mt10"}>
                        <li style={{width: "30px", height: "30px"}}><CartIcon/></li>
                        <li style={{width: "30px", height: "30px"}}><CloseIcon/></li>
                        <li style={{width: "30px", height: "30px"}}><ErrorIcon/></li>
                        <li style={{width: "30px", height: "30px"}}><UploadFileIcon/></li>
                        <li style={{width: "30px", height: "30px"}}><FilterIcon/></li>
                        <li style={{width: "30px", height: "30px"}}><ImagesIcon/></li>
                        <li style={{width: "30px", height: "30px"}}><NotificationBellIcon/></li>
                        <li style={{width: "30px", height: "30px"}}><PlusIcon/></li>
                        <li style={{width: "30px", height: "30px"}}><QuickAddIcon/></li>
                        <li style={{width: "30px", height: "30px"}}><RemoveIcon/></li>
                        <li style={{width: "30px", height: "30px"}}><ReplaceIcon/></li>
                        <li style={{width: "30px", height: "30px"}}><SearchIcon/></li>
                        <li style={{width: "30px", height: "30px"}}><SortByIcon/></li>
                        <li style={{width: "30px", height: "30px"}}><WishlistIcon/></li>
                        <li style={{width: "30px", height: "30px"}}><LinkIcon/></li>
                        <li style={{width: "30px", height: "30px"}}><LoaderIcon/></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default GlobalComponents;