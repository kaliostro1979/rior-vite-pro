import React from 'react';
import {CustomImage} from '@/Components/ui';

export const ProductCard = (props) => {
    const {src, alt, productTitle, productPrice} = props

    return (
        <>
            <div className={"w-full group"}>
                <div className={"lg:aspect-[62/43] aspect-square w-full relative overflow-hidden rounded-lg border border-gray-border mb-2.5"}>
                    <CustomImage src={src} alt={alt} classes={"absolute top-0 left-0 w-full h-full object-contain object-center scale-100 group-hover:scale-105 transition-all ease-linear duration-300"}/>
                </div>
                <div>
                    <p className={"text-gray-label lg:text-base lg:leading-5 text-xs leading-[14px] mb-2.5"}>{productTitle}</p>
                    <p className={"text-primary-black lg:text-base lg:leading-5 text-xs leading-[14px]"}>{productPrice}</p>
                </div>
            </div>
        </>
    );
};
