import React, {useEffect} from 'react';
import {ToastContainer, toast, Bounce} from 'react-toastify';
import CloseIcon from "@/assets/icons/close-black.svg"
import ErrorIcon from "@/assets/icons/close-red.svg"
import SuccessIcon from "@/assets/icons/success.svg"
import { useDispatch, useSelector } from 'react-redux';
import { setIsCopyURL } from "@/store/slices/steps";
import {CustomImage} from "@/Components/ui/index.js";

const ToastCloseButton = () => {
    return (
        <div className={"absolute w-3 h-3 top-[14px] right-[14px] z-[1]"}>
            <CustomImage src={CloseIcon} alt={"Close Icon"} classes={"w-full h-full"}/>
        </div>
    )
}

const ToastInner = (props) => {
    const {message = '', isSuccess} = props

    return (
        <div>
            <div className={"flex items-start gap-x-[14px]"}>
                <div className={"w-6 h-6 min-w-6 min-h-6"}>
                    <CustomImage src={!isSuccess ? ErrorIcon : SuccessIcon} alt={"Status icon"} classes={"w-full h-full"}/>
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
    const { message = '', customClasses, isSuccess = false } = props
    const dispatch = useDispatch()
    const { isCopied } = useSelector(state => state.stepWizard)

    const unsubscribe = toast.onChange((payload) => {
        switch (payload.status) {
            case "added":
                break;
            case "updated":
                break;
            case "removed":
                dispatch(setIsCopyURL(false))
                break;
        }
    });

    useEffect(() => {
        unsubscribe();
    }, [isCopied, unsubscribe])

    useEffect(() => {
        if (message && Object.entries(message)?.length) {
    
            toast(<ToastInner message={message} isSuccess ={isSuccess}/>, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                className: `${customClasses ? customClasses : "relative max-w-[354px] py-[14px] pl-[14px] pr-10 rounded-lg border border-error-red bg-error-red-light opacity-100"}`,
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