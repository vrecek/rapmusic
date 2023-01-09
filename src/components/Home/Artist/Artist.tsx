import React from 'react'
import '../../../css/Artist.css'
import { ArtistType } from '../../../interfaces/ArtistType'
import Image from '../../Common/Image'
import ArtistText from './ArtistText'
import DiscsSection from './Discs/DiscsSection'
import ArtistInfo from './Info/ArtistInfo'


const Artist = ({artist}: {artist: ArtistType}) => {
    const {backgroundImage, albums, desc, name, informations} = artist


    return (
        <section className="artist">

            <section className="content">

                <ArtistText desc={desc} name={name} />

                <ArtistInfo informations={informations} />

                <DiscsSection albums={albums} />

            </section>

            <Image cname='bg' source={backgroundImage} />

        </section>
    )
}


export default Artist