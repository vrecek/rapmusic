import { AlbumType, ObjectInfo } from "./AlbumType"
import { CommentType } from "./CommonInterfaces"

export type ArtistType = {
    image: string
    backgroundImage: string
    name: string
    desc: string
    informations: ObjectInfo[]
    views: number
    likes: number
    albums: AlbumType[]
    comments: CommentType[]
}

export type ArtistInfo = {
    what: string
    value: string | number
}