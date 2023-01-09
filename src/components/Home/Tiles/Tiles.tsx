import React from 'react'
import '../../../css/Tiles.css'
import { ArtistType } from '../../../interfaces/ArtistType'
import Image from '../../Common/Image'
import ArtistSection from './ArtistSection/ArtistSection'
import ImagesSection from './ImagesSection/ImagesSection'


const Tiles = ({artists}: {artists: ArtistType[]}) => {
    const [currentArtist, setArtist] = React.useState<ArtistType>(artists[0])


    return (
        <section className="tiles">

            <ImagesSection all={artists} setter={setArtist} />
            
            <ArtistSection
                desc={currentArtist.desc}
                informations={currentArtist.informations}
                name={currentArtist.name}
            />

            <Image source={currentArtist.backgroundImage} altTxt='Artist' cname='bg' />

        </section>
    )
}

export default Tiles