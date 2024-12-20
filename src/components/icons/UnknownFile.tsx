import React from 'react';

interface IconProps {
    size: string;
}

const UnknownFile: React.FC<IconProps> = ({ size }) => {
    return (
        <svg height={size} width={size} version="1.1" id="Layer_1"
            viewBox="0 0 512 512" >
            <polygon style={{fill:"#EEBA7D"}} points="447.677,403.673 339.35,512 64.323,512 64.323,0 447.677,0 " />
            <polygon style={{fill:"#E68D2C"}} points="447.677,403.673 339.35,512 256,512 256,0 447.677,0 " />
            <polygon style={{fill:"#E06B34"}} points="339.35,512 339.35,403.673 447.677,403.673 " />
            <g>
                <rect x="166.155" y="86.817" style={{fill:"#E9E9E9"}} width="179.701" height="33.391" />
                <rect x="166.155" y="161.024" style={{fill:"#E9E9E9"}} width="179.701" height="33.391" />
                <rect x="166.155" y="235.219" style={{fill:"#E9E9E9"}} width="179.701" height="33.391" />
                <rect x="166.155" y="309.426" style={{fill:"#E9E9E9"}} width="179.701" height="33.391" />
            </g>
            <g>
                <rect x="256" y="86.817" style={{fill:"#D4D4D4"}} width="89.845" height="33.391" />
                <rect x="256" y="161.024"  style={{fill:"#D4D4D4"}} width="89.845" height="33.391" />
                <rect x="256" y="235.219" style={{fill:"#D4D4D4"}} width="89.845" height="33.391" />
                <rect x="256" y="309.426" style={{fill:"#D4D4D4"}} width="89.845" height="33.391" />
            </g>
        </svg>
    );
};

export default UnknownFile;