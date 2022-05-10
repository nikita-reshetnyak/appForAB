import React from "react";
import PhotoItem from "../PhotoItem/PhotoItem";
const PhotoFilteredList = ({ isLiked, ...props }) => {
    let isLikedList = isLiked;
   
    if (isLikedList.length === 0) {
        return <div>Это список пуст!</div>
    }
    
    return (<div>
        {isLikedList.map((item, index) => <PhotoItem key={item.id} item={item} index={index } isLiked={isLiked} {...props} />)}
    </div>)
}
export default PhotoFilteredList;