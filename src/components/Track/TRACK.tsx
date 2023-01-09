import React from 'react'
import LayoutWrap from '../Layout/LayoutWrap'
import '../../css/TRACK.css'
import Informations from './Informations/Informations'
import Content from './Content/Content'
import TrackVideo from './TrackVideo'
import { Location, NavigateFunction, useLocation, useNavigate, useParams } from 'react-router-dom'
import { getOneTrack, getRelatedTracks } from '../../util/TrackFunctions'
import Comments from './Comments/Comments'
import { TrackpageState } from '../../interfaces/TrackPageInterfaces'


const TRACK = () => {
    window.scrollTo(0, 0)

    const [track, setTrack] = React.useState<TrackpageState | null>(null),
          {id} = useParams(),
          location: Location = useLocation(),
          n: NavigateFunction = useNavigate()
          

    React.useEffect(() => {
        setTrack(null)

        const track = getOneTrack(id ?? '')

        if (!track) {
            n('/', {
                replace: true
            })

            return
        }

        setTimeout(() => {
            setTrack({
                track,
                related: getRelatedTracks(track.authors[0], track.id)
            }) 
        }, 1);
    }, [location])


    if(track) {
        const {views, likes, image, length, comments, name, album, authors, production, lyrics, video} = track.track


        return (
            <LayoutWrap cname='background'>
    
                <main className='track-page'>
    
                    <Informations 
                        authors={authors} 
                        album={album} 
                        commLen={comments.length}
                        image={image}
                        production={production}
                        likes={likes}
                        views={views}
                        name={name}
                        length={length}
                    />
    
                    <Content author={authors[0]} related={track.related} lyrics={lyrics} />
    
                    <TrackVideo src={video} />
    
                    <Comments comments={comments} />
    
                </main>
    
            </LayoutWrap>
        )
    }

    return <></>
}


export default TRACK