import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import './PhotoItem.css'

const PhotoItem = ({ item, isLiked, index, setDislike, setLike, deleteItem }) => {

    return (
        <div className="photo-item">
            <button className="btn-delete" onClick={() => deleteItem(index)}>Delete</button>
            <div className="photo-item__inner">
                <div className="photo-item__image">
                    <img src={item.thumbnailUrl} alt="" />
                </div>
                <div className="photo-item__text">
                    <h5>{item.title}</h5>
                    <div className="photo-item__btns">

                        <span onClick={() => {setLike(item)}}>
                            <FontAwesomeIcon icon={faHeart} className={'like-btn ' + (isLiked.some(el=> el.id === item.id) ? 'selected' : '')} />
                        </span>

                        <span onClick={() => { setDislike(item.id) }}>
                            <FontAwesomeIcon icon={faHeart} className={'like-btn ' + (isLiked.some(el =>el.id === item.id) ? '' : 'not-selected')} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PhotoItem;