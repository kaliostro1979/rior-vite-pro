const LoaderIcon = ({className}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className={className}>
            <radialGradient
                id="a12"
                cx={0.66}
                fx={0.66}
                cy={0.3125}
                fy={0.3125}
                gradientTransform="scale(1.5)"
            >
                <stop offset={0} stopColor="#000000"/>
                <stop offset={0.3} stopColor="#000000" stopOpacity={0.9}/>
                <stop offset={0.6} stopColor="#000000" stopOpacity={0.6}/>
                <stop offset={0.8} stopColor="#000000" stopOpacity={0.3}/>
                <stop offset={1} stopColor="#000000" stopOpacity={0}/>
            </radialGradient>
            <circle
                transformOrigin="center"
                fill="none"
                stroke="url(#a12)"
                strokeWidth={15}
                strokeLinecap="round"
                strokeDasharray="200 1000"
                strokeDashoffset={0}
                cx={100}
                cy={100}
                r={70}
            >
                <animateTransform
                    type="rotate"
                    attributeName="transform"
                    calcMode="spline"
                    dur={2}
                    values="360;0"
                    keyTimes="0;1"
                    keySplines="0 0 1 1"
                    repeatCount="indefinite"
                />
            </circle>
            <circle
                transformOrigin="center"
                fill="none"
                opacity={0.2}
                stroke="#000000"
                strokeWidth={15}
                strokeLinecap="round"
                cx={100}
                cy={100}
                r={70}
            />
        </svg>
    );
};

export default LoaderIcon;