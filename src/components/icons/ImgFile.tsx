import React from 'react';

interface IconProps {
    size: string;
}

const ImgFile: React.FC<IconProps> = ({ size }) => {
    return (
        <svg version="1.0" id="Layer_1"
            height={size} width={size} viewBox="0 0 64 64" enable-background="new 0 0 64 64" >
            <g>
                <path fill="#F9EBB2" d="M8,8h48v32.688l-9.113-9.113c-1.562-1.559-4.094-1.559-5.656,0L16.805,56H8V8z" />
                <polygon fill="#B4CCB9" points="28.117,56 44.059,40.059 56,52 56,56 	" />
                <g>
                    <path fill="#394240" d="M60,0H4C1.789,0,0,1.789,0,4v56c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4V4C64,1.789,62.211,0,60,0z
        M56,56H28.117l15.941-15.941L56,52V56z M56,40.688l-9.113-9.113c-1.562-1.559-4.094-1.559-5.656,0L16.805,56H8V8h48V40.688z"/>
                    <circle fill="#394240" cx="24" cy="24" r="8" />
                </g>
            </g>
        </svg>
    );
};

export default ImgFile;