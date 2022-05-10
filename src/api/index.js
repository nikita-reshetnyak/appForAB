import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',

});
export const albumsApi = {
    getAlbums(albumSize = 1) {
        return instance.get(`photos?albumId=${albumSize}`)
    },
}
