import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import '../../../css/SearchTrack.css'
import { SearchPageTrack } from '../../../interfaces/SearchInterfaces'
import Rating from '../../Home/Tracks/TrackSection/Rating'
import TrackLeft from './TrackLeft'

const SearchTrack = ({commLen, likes, views, album, author, id, name}: SearchPageTrack) => {
    const n: NavigateFunction = useNavigate()


    return (
        <article onClick={() => n(`/track/${id}`)} className="search-track">

            <TrackLeft album={album} author={author} name={name} />

            <Rating commLen={commLen} likes={likes} views={views} />

        </article>
    )
}

export default SearchTrack