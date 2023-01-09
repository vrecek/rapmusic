import React from 'react'
import { SearchPageAlbumMisc } from '../../../interfaces/SearchInterfaces'
import Rating from '../../Home/Tracks/TrackSection/Rating'

const AlbumMisc = ({tracksNr, commLen, likes, views}: SearchPageAlbumMisc) => {
    return (
        <section>

            <p className="total">Tracks: {tracksNr}</p>
            <Rating 
                commLen={commLen}
                likes={likes}
                views={views}
            />

        </section>
    )
}

export default AlbumMisc