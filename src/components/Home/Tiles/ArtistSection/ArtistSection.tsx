import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { TilesArtits } from '../../../../interfaces/HomeInterfaces'
import Button from '../../../Common/Button'
import ArtistDescriptions from './ArtistDescriptions'
import InformationsTable from './InformationsTable'

const ArtistSection = ({desc, informations, name}: TilesArtits) => {
    const n: NavigateFunction = useNavigate()


    return (
        <article className="artist-section">

            <ArtistDescriptions desc={desc} name={name} />

            <InformationsTable informations={informations} />

            <Button action={() => n(`/artist/${name}`)} text='View artist' />

        </article>
    )
}

export default ArtistSection