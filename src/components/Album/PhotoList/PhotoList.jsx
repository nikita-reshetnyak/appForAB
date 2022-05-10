import PhotoItem from "../PhotoItem/PhotoItem"

const PhotoList = ({ albums, ...props }) => {

    let itemsList = albums;
    if (!itemsList) {
        return <div>Loading....</div>
    }
    return (
        <div>
            {itemsList.map((item, index) => <PhotoItem key={item.id} item={item} index={index }{...props} />)}
        </div>

    )
}
export default PhotoList;