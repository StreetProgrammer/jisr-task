import React, { useState, useMemo } from 'react';
import FolderClosed from '../../icons/FolderClosed.tsx'
import FolderOpend from '../../icons/FolderOpend.tsx'
import HtmlFile from '../../icons/HtmlFile.tsx'
import JSFile from '../../icons/JSFile.tsx'
import ImgFile from '../../icons/ImgFile.tsx'
import UnknownFile from '../../icons/UnknownFile.tsx'

interface File {
    name: string;
    type: 'folder' | 'file';
    data?: File[];
}

interface FileItemProps {
    file: File;
    
}

export const FileItem: React.FC<FileItemProps> = ({ file }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const [actionOpend, setActionOpend] = useState(false);

    const IconComp = useMemo(() => {
        if (!!file.meta) {
            let Icon = <></>
            switch (file.meta) {
                case "html":
                    Icon = HtmlFile;

                    break;
                case "js":
                    Icon = JSFile

                    break;
                case "img":
                case "svg":
                    Icon = ImgFile

                    break;

                default:
                    Icon = UnknownFile
                    break;
            }

            return <Icon size={30}/>
        } else {
            return null
        }
    }, [file?.meta]);

    const handleContextMenu = (event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        setActionOpend(!actionOpend)
    };

    const handleOnFolderIconClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        setIsExpanded(!isExpanded)
    }

    const handleOnClick = (event: React.MouseEvent) => {
        setIsSelected(!isSelected)
    }

    const handleOnClickCopy = (event: React.MouseEvent) => {
        event.stopPropagation();
        console.log("Copy " + file.name);
        
    }

    const handleOnClickDelete = (event: React.MouseEvent) => {
        event.stopPropagation();
        console.log("Delete " + file.name);
        
    }
    const handleOnClickRename = (event: React.MouseEvent) => {
        event.stopPropagation();
        console.log("Rename " + file.name);
        
    }

    return (
        <div className={`file-item ${isSelected && file.type !== 'folder' ? 'selected' : ''}`} 
            onClick={handleOnClick} 
            onContextMenu={handleContextMenu}
        >
            <span>{file.name}</span>
            {file.type === 'folder' ? (
                <>
                    <span onClick={handleOnFolderIconClick}>
                        {isExpanded
                            ? <FolderOpend color="#F8D775" size={30} />
                            : <FolderClosed color="#F8D775" size={30} />
                        }
                    </span>
                    {isExpanded && file.data && file.data.map((child) => (
                        <div style={{ marginLeft: '20px' }} key={child.name}>
                            <FileItem file={child}  />
                        </div>
                    ))}
                </>
            ) : IconComp}

            {actionOpend && 
                <ul className="actions">
                    <li><b>{file.name}</b></li>
                    <li onClick={handleOnClickCopy}>copy</li>
                    <li onClick={handleOnClickDelete}>delete</li>
                    <li onClick={handleOnClickRename}>rename</li>
                </ul>
            }
        </div>
    );
};