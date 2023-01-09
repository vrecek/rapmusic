import React from 'react'
import { AlbumRight } from '../../../interfaces/AlbumInterfaces'
import Rating from '../../Home/Tracks/TrackSection/Rating'

const RightSection = ({author, name, desc, views, likes, commLen}: AlbumRight) => {
    return (
        <section className="right-section">

            {
                author
                    && <h2>{author}</h2> 
            }
            <h1>{name}</h1>

            <p className="desc">{desc}</p>

            <Rating likes={likes} views={views} commLen={commLen} />

        </section>
    )
}

export default RightSection