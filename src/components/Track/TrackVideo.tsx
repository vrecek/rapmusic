import React from 'react'
import Video from '../Home/Tracks/VideoSection/Video'

const TrackVideo = ({src}: {src: string}) => {
    return (
        <section className="track-video">

            <p className="header">Music video</p>

            <Video src={src} />

        </section>
    )
}

export default TrackVideo