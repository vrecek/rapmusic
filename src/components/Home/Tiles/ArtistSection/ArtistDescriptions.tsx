import React from 'react'
import { TilesDescription } from '../../../../interfaces/HomeInterfaces'

const ArtistDescriptions = ({name, desc}: TilesDescription) => {
    return (
        <section className="descriptions">

            <p className="header">{name}</p>
            <p className="desc">{desc}</p>

        </section>
    )
}

export default ArtistDescriptions