import React from 'react';

export const ParameterItem = (props) => {
    const {parameter} = props
    return (
        <>
            <li key={parameter.id} className={"px-3 py-1.5 rounded-md flex flex-col items-start gap-y-1.5 bg-gray-blurred-dark backdrop-blur-xs min-h-[52px] min-w-[86px]"}>
                <p className={"text-[11px] leading-none"}>{parameter.title}</p>
                <p className={"paragraph"}>{parameter.value}</p>
            </li>
        </>
    );
};