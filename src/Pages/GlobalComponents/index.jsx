import React from 'react';

const GlobalComponents = () => {
    return (
        <div>
            <ul className={"grid grid-cols-5 gap-5 w-fit"}>
                <li className={"w-12 h-12 rounded-full border border-primary-black bg-primary-black"}></li>
                <li className={"w-12 h-12 rounded-full border border-primary-black bg-primary-white"}></li>
                <li className={"w-12 h-12 rounded-full border border-primary-black bg-gray"}></li>
                <li className={"w-12 h-12 rounded-full border border-primary-black bg-gray-medium"}></li>
                <li className={"w-12 h-12 rounded-full border border-primary-black bg-gray-light"}></li>
                <li className={"w-12 h-12 rounded-full border border-primary-black bg-gray-dark"}></li>
                <li className={"w-12 h-12 rounded-full border border-primary-black bg-gray-disabled"}></li>
                <li className={"w-12 h-12 rounded-full border border-primary-black bg-border"}></li>
                <li className={"w-12 h-12 rounded-full border border-primary-black bg-gray-border-light"}></li>
                <li className={"w-12 h-12 rounded-full border border-primary-black bg-gray-label"}></li>
                <li className={"w-12 h-12 rounded-full border border-primary-black bg-gray-blurred"}></li>
                <li className={"w-12 h-12 rounded-full border border-primary-black bg-error-red"}></li>
                <li className={"w-12 h-12 rounded-full border border-primary-black bg-error-red-light"}></li>
            </ul>
        </div>
    );
};

export default GlobalComponents;