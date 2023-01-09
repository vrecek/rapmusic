import React from 'react'
import LayoutWrap from '../Layout/LayoutWrap'
import '../../css/Search.css'
import SearchEntry from './SearchEntry/SearchEntry'
import SearchAlbum from './SearchAlbum/SearchAlbum'
import SearchTrack from './SearchTrack/SearchTrack'
import SearchAuthor from './SearchAuthor/SearchAuthor'
import SearchArticle from './SearchArticle/SearchArticle'
import { Location, NavigateFunction, useLocation, useNavigate, useParams } from 'react-router-dom'
import { searchBarItems } from '../../util/searchFunctions'
import { SearchResult, SearchReturn } from '../../interfaces/SearchInterfaces'
import { ArtistType } from '../../interfaces/ArtistType'
import { AlbumType } from '../../interfaces/AlbumType'
import { TrackType } from '../../interfaces/TrackType'
import { ArticleType } from '../../interfaces/ArticleInterfaces'


const SEARCH = () => {
    window.scrollTo(0, 0)

    const [results, setResults] = React.useState<SearchReturn | null>(null)

    const {type, query} = useParams(),
          n: NavigateFunction = useNavigate(),
          l: Location = useLocation()


    React.useEffect(() => {
        if (!type || !query) {
            n('/', { replace: true })

            return
        }

        const items: SearchReturn = searchBarItems(query)
        setResults(items)
    }, [l])


    const displayItems = (): JSX.Element[] => {
        return results!.map((x, i) => {
            switch(x.type) {
                case 'Artist':
                    x = x as SearchResult<ArtistType>
                    return <SearchAuthor 
                                key={i}
                                albumNr={x.albums.length}
                                image={x.image}
                                name={x.name}
                                views={x.views}
                                tracks={x.albums.map(y => y.tracks).flat().length}
                            />

                case 'Album':
                    x = x as SearchResult<AlbumType>
                    return <SearchAlbum 
                                key={i}
                                author={x.author}
                                commLen={x.comments.length}
                                image={x.image}
                                likes={x.likes}
                                name={x.name}
                                tracksNr={x.tracks.length}
                                views={x.views}
                                id={x.id}
                            />

                case 'Track':
                    x = x as SearchResult<TrackType>
                    return <SearchTrack 
                                key={i}
                                album={x.album}
                                author={x.authors[0]}
                                commLen={x.comments.length}
                                id={x.id}
                                likes={x.likes}
                                name={x.name}
                                views={x.views}
                            />

                case 'Article':
                    x = x as SearchResult<ArticleType>
                    return <SearchArticle 
                                key={i}
                                category={x.category}
                                date={x.date}
                                id={x.id}
                                image={x.image}
                                tags={x.tags}
                                text={x.text}
                                title={x.title}
                            />

                default: return <></>
            }
        })
    }

    if(results)    
    return (
        <LayoutWrap cname='background'>

            <main className="search">

                <SearchEntry>{query!}</SearchEntry>

                <section className="container">

                    { 
                        results.length
                            ? displayItems()
                            : <h1>No results found</h1> 
                    }

                </section>

            </main>

        </LayoutWrap>
    )

    return <></>
}

export default SEARCH