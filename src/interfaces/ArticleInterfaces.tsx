import { CommentType } from "./CommonInterfaces"

export type ArticleType = {
    title: string
    category: string
    date: string
    likes: number
    dislikes: number
    views: number
    image: string
    tags: string[]
    text: string
    id: string
    comments: CommentType[]
}