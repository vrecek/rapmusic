import React from "react"
import { NavigateFunction } from "react-router-dom"
import AllAuthors from "../Data/Authors/AllAuthors"
import { ArticleType } from "../interfaces/ArticleInterfaces"
import { ArtistType } from "../interfaces/ArtistType"
import ArticlesData from "../Data/Articles/ArticlesData"
import { TrackType } from "../interfaces/TrackType"
import ALL_TRACKS from "../Data/Tracks/AllTracks"
import { AlbumType } from "../interfaces/AlbumType"
import AllAlbums from "../Data/Albums/AllAlbums"
import Client from "./Client"
import { Name, SearchEnum, SearchResult, SearchReturn } from "../interfaces/SearchInterfaces"


const searchEnterQuery = (e: React.KeyboardEvent, n: NavigateFunction): void => {
    const input: HTMLInputElement = e.currentTarget as HTMLInputElement,
          {value} = input,
          {key} = e


    if (value.length > 2 && key === 'Enter') {
        input.value = ''

        n(`/search/bar/${value}`)
    }
}


const getByName = <T,>(query: string, arr: Name<T>[], type: SearchEnum): SearchResult<T>[] => {
    return arr
        .filter(x => x.name.toLowerCase().match(query))
        .map(x => {
            return {
                ...x,
                type
            }
        })
}

const getArticles = (query: string): SearchResult<ArticleType>[] => {
    const articlesByTitle: string[] = ArticlesData.filter(x => x.title.toLocaleLowerCase().match(query))
                                                  .map(x => x.id)

    const articlesByTags: string[] = ArticlesData.filter(x => x.tags.some(y => y.toLowerCase().match(query)))
                                                 .map(x => x.id)


    return [...new Set([...articlesByTitle, ...articlesByTags])]
            .map(x => {
                const index: number = ArticlesData.findIndex(y => y.id === x)

                return {
                    ...ArticlesData[index],
                    type: 'Article'
                }
            })
}


const searchBarItems = (query: string): SearchReturn => {
    query = query.toLowerCase()

    return Client.shuffleArray([
        ...getByName<ArtistType>(query, AllAuthors, 'Artist'),
        ...getByName<TrackType>(query, ALL_TRACKS, 'Track'),
        ...getByName<AlbumType>(query, AllAlbums, 'Album'),
        ...getArticles(query)
    ])
}


export {
    searchBarItems,
    searchEnterQuery
}