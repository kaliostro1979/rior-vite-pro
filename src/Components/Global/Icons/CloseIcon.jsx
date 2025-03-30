const CloseIcon = ({className}) => {
    return (
        <svg
            width={"100%"}
            height={"100%"}
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <g clipPath="url(#clip0_2713_487)">
                <path
                    d="M12 0.707L11.293 0L6 5.293L0.707 0L0 0.707L5.293 6L0 11.293L0.707 12L6 6.707L11.293 12L12 11.293L6.707 6L12 0.707Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0_2713_487">
                    <rect width={"100%"} height={"100%"} fill="white"/>
                </clipPath>
            </defs>
        </svg>
    );
};

export default CloseIcon;