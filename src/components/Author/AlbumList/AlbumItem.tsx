import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { ArtistAlbumItem } from '../../../interfaces/ArtistPageInterfaces'
import Image from '../../Common/Image'

const AlbumItem = ({image, id, date, name}: ArtistAlbumItem) => {
    const n: NavigateFunction = useNavigate()


    return (
        <article onClick={() => n(`/album/${id}`)} className="album-item">

            <Image source={image} altTxt={name} />

            <section>

                <p className="name">{name}</p>
                <p className="date">{date}</p>

            </section>

        </article>
    )
}

export default AlbumItem