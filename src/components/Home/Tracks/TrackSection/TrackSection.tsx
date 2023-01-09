import React from 'react'
import { HomeTrack } from '../../../../interfaces/HomeInterfaces'
import Lyrics from './Lyrics'
import Rating from './Rating'
import TitleAuthor from './TitleAuthor'

const TrackSection = ({likes, views, commLen, id, album, authors, name, production, text}: HomeTrack) => {
    return (
        <section className="track-section">

            <p className="header">Chosen track</p>

            <section className="track">

                <TitleAuthor
                    album={album}
                    authors={authors}
                    name={name}
                    production={production}
                />

                <Rating commLen={commLen} likes={likes} views={views} />

                <Lyrics id={id} text={text} />

            </section>

        </section>
    )
}

export default TrackSection