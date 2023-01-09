import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { HomeArtistText } from '../../../interfaces/HomeInterfaces'

const ArtistText = ({name, desc}: HomeArtistText) => {
    const n: NavigateFunction = useNavigate()


    return (
        <article>

            <p onClick={() => n(`/artist/${name}`)} className="name">{name}</p>
            <p className="desc">{desc}</p>

        </article>
    )
}

export default ArtistText