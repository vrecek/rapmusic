import React from 'react'
import { AlbumLeft } from '../../../interfaces/AlbumInterfaces'
import Image from '../../Common/Image'
import ListInformations from './ListInformations'

const LeftSection = ({image, informations}: AlbumLeft) => {
    return (
        <section className="left-section">

            <Image source={image} altTxt='Image' />

            <ul>

                {
                    informations.map((x, i) => (
                        <ListInformations
                            what={x.what}
                            value={x.value}
                            key={i}
                        />
                    ))
                }

            </ul>

        </section>
    )
}

export default LeftSection