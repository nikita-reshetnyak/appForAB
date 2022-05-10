import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import PhotoList from "./PhotoList/PhotoList";
import PhotoFilteredList from "./PhotoFilteredList/PhotoFilteredList";
import './Album.css'

const Album = ({ albums, isLiked, ...props }) => {
   
    const [filterMode, setFilterMode] = useState(false)

    return (
        <div className="album-wrapper">
            <div className="filter-btn" onClick={() => setFilterMode(!filterMode)}>
                <FontAwesomeIcon icon={faFilter} />
            </div>
            {filterMode ? <PhotoFilteredList isLiked={isLiked} {...props} /> : <PhotoList albums={albums} isLiked={isLiked} {...props} />}
           
        </div>
    )
}
export default Album;