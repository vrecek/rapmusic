import React from 'react'

const Video = ({src}: {src: string}) => {
    return (
        <section className="video">

            <iframe src={src} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

        </section>
    )
}

export default Video