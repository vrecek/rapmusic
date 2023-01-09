import { CommentType } from "./CommonInterfaces"

export type TrackType = {
    id: string
    image: string
    production: string
    authors: string[]
    name: string
    album: string
    views: number
    likes: number
    comments: CommentType[]
    lyrics: LyricsLang
    video: string
    length: number
}

export type LyricsLang = {
    Polish: string
    English: string
}