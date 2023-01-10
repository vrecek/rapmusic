import AllAlbums from "../Data/Albums/AllAlbums";
import { AlbumType } from "../interfaces/AlbumType"
import { TrackType } from "../interfaces/TrackType";


const getTrendingAlbums = (): AlbumType[] => AllAlbums.sort((a, b) => b.views - a.views).slice(0, 10)

const getOneAlbum = (id: string): AlbumType | null => AllAlbums.filter(x => x.id === id)?.[0] ?? null

const getAlbumLength = (tracks: TrackType[]): string => {
    const seconds: number = tracks.reduce((p, c) => p + c.length, 0)

    return `${Math.floor(seconds / 60)} minutes`
}


export {
    getTrendingAlbums,
    getOneAlbum,
    getAlbumLength
}