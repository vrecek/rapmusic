import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { AlbumTrack } from '../../../interfaces/AlbumInterfaces'
import secondsToTime from '../../../util/secondsToTime'
import Authors from './Authors'

const OneTrack = ({num, name, authors, length, id}: AlbumTrack) => {
    const n: NavigateFunction = useNavigate()


    return (
        <article onClick={() => n(`/track/${id}`)} className="track">

            <p className="num">{num}</p>
            <p className="name">{name}</p>

            <Authors authors={authors} />

            <p className="length">{secondsToTime(length)}</p>

        </article>
    )
}

export default OneTrack