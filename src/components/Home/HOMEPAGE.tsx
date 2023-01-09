import React from 'react'
import AllAlbums from '../../Data/Albums/AllAlbums'
import AllAuthors from '../../Data/Authors/AllAuthors'
import ALL_TRACKS from '../../Data/Tracks/AllTracks'
import { ArtistType } from '../../interfaces/ArtistType'
import { HomepageState } from '../../interfaces/HomeInterfaces'
import { TrackType } from '../../interfaces/TrackType'
import { getRandomArtists } from '../../util/ArtistFunctions'
import Client from '../../util/Client'
import { getRandomTracks } from '../../util/TrackFunctions'
import LayoutWrap from '../Layout/LayoutWrap'
import Artist from './Artist/Artist'
import Blog from './Blog/Blog'
import Header from './Header/Header'
import Tiles from './Tiles/Tiles'
import Tracks from './Tracks/Tracks'
import Trends from './Trends/Trends'


const HOMEPAGE = () => {
    window.scrollTo(0, 0)

    const [home, setState] = React.useState<HomepageState | null>(null)

    React.useEffect(() => {
        setState({
            overallInformations: {
                totalAlbums: AllAlbums.length,
                totalAuthors: AllAuthors.length,
                totalTracks: ALL_TRACKS.length
            },
            artists: Client.shuffleArray(AllAuthors),
            randomArtists: getRandomArtists(2),
            randomTracks: getRandomTracks(2)
        })
    }, [])

    
    if(home) {
        const {randomTracks, randomArtists, artists, overallInformations} = home


        return (
            <LayoutWrap>
                
                <main className="homepage">
    
                    <Header info={overallInformations} />
    
                    <Artist artist={randomArtists[0]} />
    
                    <Trends />

                    <Tiles artists={artists} />
    
                    <Tracks track={randomTracks[0]} />
    
                    <Artist artist={randomArtists[1]} />
    
                    <Tracks track={randomTracks[1]} />
    
                    <Blog />
    
                </main>
    
            </LayoutWrap>
        )
    }

    return <></>
}


export default HOMEPAGE