import React from 'react';

const PlusIcon = ({className}) => {
    return (
        <svg
            width={"100%"}
            height={"100%"}
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <g clipPath="url(#clip0_2713_612)">
                <path
                    d="M12.9376 6.93753H7.31252V1.31249C7.31252 1.00183 7.06069 0.75 6.75003 0.75C6.43937 0.75 6.18753 1.00183 6.18753 1.31249V6.93751H0.562494C0.251834 6.93753 0 7.18937 0 7.50003C0 7.81069 0.251834 8.06252 0.562494 8.06252H6.18751V13.6875C6.18751 13.9982 6.43934 14.25 6.75 14.25C7.06066 14.25 7.31249 13.9982 7.31249 13.6875V8.06252H12.9375C13.2482 8.06252 13.5 7.81069 13.5 7.50003C13.5001 7.18937 13.2482 6.93753 12.9376 6.93753Z"
                    fill="currentCOlor"
                />
            </g>
            <defs>
                <clipPath id="clip0_2713_612">
                    <rect
                        width={"100%"}
                        height={"100%"}
                        fill="white"
                        transform="translate(0 0.5)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

export default PlusIcon;