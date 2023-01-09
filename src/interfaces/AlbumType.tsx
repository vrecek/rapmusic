import {CommentType} from './CommonInterfaces'
import { TrackType } from './TrackType'


export type AlbumType = {
    id: string
    image: string
    author: string
    name: string
    desc: string
    informations: ObjectInfo[]
    views: number
    likes: number
    date: number
    comments: CommentType[]
    tracks: TrackType[]
}

export type ObjectInfo = {
    what: string
    value: string | number
    icon?: JSX.Element
}