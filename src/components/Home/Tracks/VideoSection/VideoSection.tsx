import React from 'react'
import OpenYt from './OpenYt'
import Video from './Video'

const VideoSection = ({video}: {video: string}) => {
    const ytRedirect: string = video.replace('embed/', 'watch?v=')


    return (
        <section className="video-section">

            <p className="header">Music video</p>

            <Video src={video} />

            <OpenYt link={ytRedirect} />

        </section>
    )
}

export default VideoSection