import React from 'react'
import InfoDiv from './InfoDiv'
import { ObjectInfo } from '../../../../interfaces/AlbumType'


const ArtistInfo = ({informations}: {informations: ObjectInfo[]}) => {
    return (
        <section className="info">

            <p className="small-header">informations</p>

            {
                informations.map((x, i) => (
                    <InfoDiv
                        key={i}
                        what={x.what}
                        value={x.value}
                        icon={x.icon!}
                    />        
                ))
            }

        </section>
    )
}

export default ArtistInfo