
import { albumsApi } from "../api";

const SET_ALBUMS_SUCCESS = 'store/albums/SET_ALBUMS_SUCCESS';
const SET_DISLIKE = 'store/albums/SET_DISLIKE';
const SET_LIKE = 'store/albums/SET_LIKE';
const DELETE_ITEM = 'store/albums/DELETE_ITEM';

let initialState = {
    albums: [],
    isLiked: [],


};

export const albumReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALBUMS_SUCCESS:
            return {
                ...state,
                albums: [...state.albums, ...action.payload]
            }
        case SET_LIKE:
            return {
                ...state,
                isLiked: [...state.isLiked, { ...action.item }]

            }
        case SET_DISLIKE:
            return {
                ...state,
                isLiked: [...state.isLiked.filter(item => item.id !== action.id)]
            }
        case DELETE_ITEM:
            return {
                ...state,
                 albums: [...state.albums.filter((item, index) => index  !== action.id)]
            }

        default:
            return state;
    }
};
export const setAlbumsSuccess = (album) => ({ type: SET_ALBUMS_SUCCESS, payload: album })
export const setDislike = (id) => ({ type: SET_DISLIKE, id });
export const setLike = (item) => ({ type: SET_LIKE, item });
export const deleteItem = (id) => ({ type: DELETE_ITEM, id });


export const setAlbums = () => async (dispatch) => {
    let response = await albumsApi.getAlbums();
    if (response.status === 200) {
        const album = response.data;
        dispatch(setAlbumsSuccess(album))
    }

};
