import { AlbumType } from "./AlbumType"
import { ArticleType } from "./ArticleInterfaces"
import { ArtistType } from "./ArtistType"
import { RatingOptions } from "./CommonInterfaces"
import { TrackType } from "./TrackType"

export type SearchEnum = 'Artist' | 'Article' | 'Track' | 'Album'

export type Name<T> = T & {name: string}

export type SearchResult<T> = T & {
    type: SearchEnum
}

export type SearchReturn = (SearchResult<ArtistType> | SearchResult<AlbumType> | SearchResult<ArticleType> | SearchResult<TrackType>)[]


// Search artist
export type SearchPageAuthor = SearchPageAuthorDetails & {
    image: string
    name: string
}

export type SearchPageAuthorDetails = {
    albumNr: number
    views: number
    tracks: number
}


// Search track
export type SearchPageTrack = SearchPageTrackLeft & RatingOptions & {
    id: string
}

export type SearchPageTrackLeft = {
    author: string
    name: string
    album: string
}


// Search article
export type SearchPageArticle = SearchPageArticleMisc & SearchPageArticleText & {
    image: string
    text: string
    id: string
}

export type SearchPageArticleMisc = {
    tags: string[]
    date: string
}

export type SearchPageArticleText = {
    title: string
    category: string
}


// Search album
export type SearchPageAlbum = SearchPageAlbumText & SearchPageAlbumMisc & {
    image: string
    id: string
}

export type SearchPageAlbumMisc = RatingOptions & {
    tracksNr: number
}

export type SearchPageAlbumText = {
    author: string
    name: string
}