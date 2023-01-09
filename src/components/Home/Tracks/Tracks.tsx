import React from 'react'
import '../../../css/Tracks.css'
import { TrackType } from '../../../interfaces/TrackType'
import TrackSection from './TrackSection/TrackSection'
import VideoSection from './VideoSection/VideoSection'


const Tracks = ({track}: {track: TrackType}) => {
    const {views, likes, id, production, lyrics, comments, name, album, authors} = track

    const text: string = lyrics.Polish.split(/\n/).slice(0, 10).join('\n')


    return (
        <section className="tracks">

            <TrackSection 
                commLen={comments.length}
                views={views}
                likes={likes}
                name={name}
                authors={authors}
                text={text}
                id={id}
                production={production}
                album={album}
            />

            <VideoSection video={track.video} />

        </section>
    )
}


export default Tracks