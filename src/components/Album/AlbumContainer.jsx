import { useEffect } from "react";
import { connect } from "react-redux";
import { setAlbums,setDislike,setLike,deleteItem } from "../../store/albums";
import { getAlbums,getIsLike,getSelectedItem } from "../../store/albums-selector";
import Album from "./Album"

const AlbumContainer = ({ setAlbums,albums,...props }) => {
    useEffect(() => {
        setAlbums()
    }, [])
    return <Album albums={albums} {...props}  />
};

const mapStateToProps = (state) => {
    return {
        albums: getAlbums(state),
        isLiked: getIsLike(state),
        selectedItem:getSelectedItem(state)
    }
}
export default connect(mapStateToProps, { setAlbums,setLike,setDislike,deleteItem})(AlbumContainer); 