import React from 'react';

interface IconProps {
    color: string;
    size: string;
}

const FolderClosed: React.FC<IconProps> = ({ color, size }) => {


    return (
        <svg fill={color} height={size} width={size} version="1.1" id="Capa_1" 
            viewBox="0 0 479.255 479.255" >
            <g>
                <path d="M479.255,156.759c0-15.335-12.435-27.786-27.784-27.786H284.788c-19.179,0-34.735-15.556-34.735-34.735
		c0-15.334-12.435-27.77-27.786-27.77H90.274c-15.318,0-27.753,12.436-27.753,27.77c0,19.18-15.556,34.735-34.737,34.735
		C12.435,128.973,0,141.424,0,156.759v222.647c0,18.439,14.956,33.381,33.363,33.381h73.255h35.618h303.639
		c18.408,0,33.365-14.941,33.365-33.381v-152.45l0.015,0.016V156.759z"/>
            </g>
        </svg>
    );
};

export default FolderClosed;