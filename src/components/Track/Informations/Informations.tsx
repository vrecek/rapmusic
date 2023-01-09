import React from 'react'
import { TrackInformations } from '../../../interfaces/TrackPageInterfaces'
import Image from '../../Common/Image'
import Rating from '../../Home/Tracks/TrackSection/Rating'
import TrackInfo from './TrackInfo'

const Informations = ({views, likes, commLen, image, authors, name, album, production, length}: TrackInformations) => {
    return (
        <section className="informations">

            <Image cname='img' source={image} altTxt={name} />

            <section className="text">

                <TrackInfo length={length} production={production} authors={authors} name={name} album={album} />

            </section>

            <Rating commLen={commLen} likes={likes} views={views} />

        </section>
    )
}

export default Informations