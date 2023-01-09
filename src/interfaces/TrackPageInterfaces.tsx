import {LyricsLang, TrackType} from './TrackType'


export type TrackInformations = TrackInfoSection & {
    views: number
    likes: number
    commLen: number
    image: string
}

export type LyricsLanguage = {
    lyrics: LyricsLang
}

export type TrackInfoSection = {
    authors: string[]
    name: string
    production: string
    album: string
    length: number
}

export type TrackMiscInfo = {
    album: string
    length: number
}

export type TrackpageState = {
    track: TrackType
    related: TrackRelated[] 
}

export type TrackRelated = {
    name: string
    id: string
}

export type TrackpageContent = LyricsLanguage & {
    related: TrackRelated[]
    author: string
}

export type TrackPageAside = {
    author: string
    tracks: TrackRelated[]
}

export type LanguageLyricsSection = LyricsLanguage & {
    setLyrics: React.Dispatch<React.SetStateAction<string>>
}