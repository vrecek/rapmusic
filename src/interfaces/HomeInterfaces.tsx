import { ObjectInfo } from "./AlbumType"
import { ArtistType } from "./ArtistType"
import { RatingOptions } from "./CommonInterfaces"
import { TrackType } from "./TrackType"

export type CounterInfo = {
    num: number
    what: string
    icon: JSX.Element
}

export type HomeBlog = HomeBlogText & HomeBlogDetails & {
    image: string
    id: string
}

export type HomeBlogText = {
    header: string
    desc: string
}

export type HomeBlogDetails = {
    tags: string[]
    category: string
}

export type ArtistInfoDiv = {
    icon: JSX.Element
    what: string
    value: string | number
}

export type Rate = {
    icon: JSX.Element
    value: number
    action?: React.MouseEventHandler
}

export type TrendPosition = PositionDetails & {
    num: number
    image: string
    name: string
    author: string
    id?: string
}

export type PositionDetails = {
    likes: number
    views: number
}

export type HomeTrack = RatingOptions & HomeTrackLyrics & HomeTrackAuthor

export type HomeTrackAuthor = {
    authors: string[]
    name: string
    production: string
    album: string
}

export type HomeTrackLyrics = {
    text: string
    id: string
}

export type HomepageState = {
    randomTracks: any//[TrackType, TrackType]
    randomArtists: any//[ArtistType, ArtistType]
    overallInformations: HeaderInformations
    artists: ArtistType[]
}

export type HeaderInformations = {
    totalTracks: number
    totalAuthors: number
    totalAlbums: number
}

export type HomeArtistText = {
    name: string
    desc: string
}

export type HomeArtistAlbum = {
    img: string
    id: string
}

export type TilesSetter = {
    setter: React.Dispatch<React.SetStateAction<ArtistType>>
}

export type TilesImages = TilesSetter & {
    all: ArtistType[]
}

export type TilesArtits = TilesDescription & TilesInformations

export type TilesDescription = {
    name: string
    desc: string
}

export type TilesInformations = {
    informations: ObjectInfo[]
}