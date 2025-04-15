import React from 'react';
import {Link} from "react-router";

export const ProductCard = (props) => {
    const {src, alt, productTitle, productUrl, productPrice} = props

    return (
        <>
            <Link to={productUrl}>
                <div className={"w-full group"}>
                    <div className={"lg:aspect-[62/43] aspect-square w-full relative overflow-hidden rounded-lg border border-gray-border mb-2.5"}>
                        <img src={src} alt={alt}
                             className={"absolute top-0 left-0 w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-all ease-linear duration-300"}/>
                    </div>
                    <div>
                        <p className={"text-gray-label lg:text-base lg:leading-5 text-xs leading-[14px] mb-2.5"}>{productTitle}</p>
                        <p className={"text-primary-black lg:text-base lg:leading-5 text-xs leading-[14px]"}>{productPrice}</p>
                    </div>
                </div>
            </Link>
        </>
    );
};
