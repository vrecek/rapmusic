import { AlbumType } from "./AlbumType"

export type ArtistAlbums = {
    name: string
    albums: AlbumType[]
}

export type ArtistAlbumItem = {
    image: string
    id: string
    name: string
    date: number
}