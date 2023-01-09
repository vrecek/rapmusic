export type LinkType = {
    url: string
    text: string
    cname?: string
}

export type LinksComponent = {
    links: LinkType[]
    ulCname?: string
}

export type CommentType = DetailsComment & RatingComment & {
    text: string
}

export type RatingComment = {
    likes: number
    dislikes: number
}

export type DetailsComment = {
    date: string
    name: string
}

export type RatingOptions = {
    views: number
    likes: number
    commLen: number
}