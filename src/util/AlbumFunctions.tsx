import AllAlbums from "../Data/Albums/AllAlbums";
import { AlbumType } from "../interfaces/AlbumType"


const getTrendingAlbums = (): AlbumType[] => AllAlbums.sort((a, b) => b.views - a.views).slice(0, 10)

const getOneAlbum = (id: string): AlbumType | null => AllAlbums.filter(x => x.id === id)?.[0] ?? null


export {
    getTrendingAlbums,
    getOneAlbum
}