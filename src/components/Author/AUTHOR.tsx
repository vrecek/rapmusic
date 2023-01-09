import React from 'react'
import { NavigateFunction, useNavigate, useParams } from 'react-router-dom'
import { ArtistType } from '../../interfaces/ArtistType'
import { getOneArtist } from '../../util/ArtistFunctions'
import Wrapper from '../Album/Wrapper'
import LayoutWrap from '../Layout/LayoutWrap'
import Comments from '../Track/Comments/Comments'
import AlbumList from './AlbumList/AlbumList'

const AUTHOR = () => {
    const [artist, setArtist] = React.useState<ArtistType | null>(null),
           n: NavigateFunction = useNavigate(),
           {name} = useParams()


    React.useEffect(() => {
        const artist = getOneArtist(name ?? '')

        if (!artist) {
            n('/', {
                replace: true
            })

            return
        }

        setArtist(artist)
    }, [])


    if(artist) {
        const {image, albums, comments, desc, informations, likes, name, views} = artist

        return (
            <LayoutWrap cname='background'>
        
                <main className="artist">
    
                    <Wrapper 
                        image={image}
                        name={name}
                        likes={likes}
                        views={views}
                        informations={informations}
                        commLen={comments.length}
                        desc={desc}
                    />

                    <AlbumList name={name} albums={albums} />   
    
                    <Comments comments={comments} />
    
                </main>
    
            </LayoutWrap>
        )
    }

    return <></>
}

export default AUTHOR