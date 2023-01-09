import React from 'react'
import LayoutWrap from '../Layout/LayoutWrap'
import '../../css/Album.css'
import Wrapper from './Wrapper'
import Comments from '../Track/Comments/Comments'
import AllTracks from './AllTracks/AllTracks'
import { NavigateFunction, useNavigate, useParams } from 'react-router-dom'
import { AlbumType } from '../../interfaces/AlbumType'
import { getOneAlbum } from '../../util/AlbumFunctions'


const ALBUM = () => {
    window.scrollTo(0, 0)
    const [album, setAlbum] = React.useState<AlbumType | null>(null),
          {id} = useParams(),
           n: NavigateFunction = useNavigate()


    React.useEffect(() => {
        const album = getOneAlbum(id ?? '')

        if (!album) {
            n('/', {
                replace: true
            })

            return
        }

        setAlbum(album)
    }, [])


    if (album) {
        const {image, name, likes, desc, views, informations, author, comments} = album


        return (
            <LayoutWrap cname='background'>
    
                <main className="album">
    
                    <Wrapper 
                        image={image}
                        name={name}
                        likes={likes}
                        views={views}
                        informations={informations}
                        author={author}
                        commLen={comments.length}
                        desc={desc}
                    />
    
                    <AllTracks tracks={album.tracks} />
    
                    <Comments comments={album.comments} />
    
                </main>
    
            </LayoutWrap>
        )
    }

    return <></>
}


export default ALBUM