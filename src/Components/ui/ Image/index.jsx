import React from 'react';

export const CustomImage = (props) => {
    const {src, alt, classes, width, height, loading} = props

    return (
        <>
            <img src={src} alt={alt} className={classes} width={width} height={height} loading={loading}/>
        </>
    );
};