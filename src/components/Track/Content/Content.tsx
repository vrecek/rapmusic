import React from 'react'
import { TrackpageContent } from '../../../interfaces/TrackPageInterfaces'
import TrackAside from './TrackAside/TrackAside'
import TrackLyrics from './TrackLyrics/TrackLyrics'

const Content = ({lyrics, related, author}: TrackpageContent) => {
    return (
        <section className="content">

            <TrackLyrics lyrics={lyrics} />

            <TrackAside author={author} tracks={related} />

        </section>
    )
}

export default Content