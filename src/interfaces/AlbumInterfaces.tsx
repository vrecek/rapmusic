import { ObjectInfo } from "./AlbumType"
import { RatingOptions } from "./CommonInterfaces"

export type AlbumTrack = {
    num: number
    name: string
    authors: string[]
    length: number
    id: string
}

export type AlbumLeft = {
    image: string
    informations: ObjectInfo[]
}

export type AlbumRight = RatingOptions & {
    author?: string
    name: string
    desc: string
}

export type AlbumWrap = AlbumLeft & AlbumRight