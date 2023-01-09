import React from 'react'
import { AlbumType } from '../../../../interfaces/AlbumType'
import OneDisc from './OneDisc'

const DiscsContainer = ({albums}: {albums: AlbumType[]}) => {
    return (
        <section className="container">

            {
                albums.map((x, i) => (
                    <OneDisc
                        key={i}
                        img={x.image}
                        id={x.id}
                    />
                ))
            }

        </section>
    )
}

export default DiscsContainer