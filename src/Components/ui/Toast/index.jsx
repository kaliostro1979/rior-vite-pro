import React, {useEffect} from 'react';
import {ToastContainer, toast, Bounce} from 'react-toastify';
import CloseIcon from "@/assets/icons/close-black.svg"
import ErrorIcon from "@/assets/icons/close-red.svg"

const ToastCloseButton = () => {
    return (
        <div className={"absolute w-3 h-3 top-[14px] right-[14px] z-[1]"}>
            <img src={CloseIcon} alt="" className={"w-full h-full"}/>
        </div>
    )
}

const ToastInner = (props) => {
    const {message = ''} = props

    return (
        <div>
           {/* <ToastCloseButton/>*/}
            <div className={"flex items-start gap-x-[14px]"}>
                <div className={"w-6 h-6 min-w-6 min-h-6"}>
                    <img src={ErrorIcon} alt="" className={"w-full h-full"}/>
                </div>
                <div className={"flex flex-col items-start gap-y-1.5"}>
                    <strong className={"paragraph-small text-primary-black"}>{message.heading}</strong>
                    <span className={"paragraph-small text-gray-label"}>{message.message}</span>
                </div>
            </div>
        </div>
    )
}

export const Toast = (props) => {
    const {message = ''} = props

    useEffect(() => {
        if (message && Object.entries(message)?.length) {
            toast(<ToastInner message={message}/>, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                className: "relative max-w-[354px] py-[14px] pl-[14px] pr-10 rounded-lg border border-error-red bg-error-red-light",
                closeButton: <ToastCloseButton/>
            })
        }
    }, [message]);


    return (
        <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick={true}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
            closeButton={ToastCloseButton}
        />
    );
};