import React from 'react'
import '../../../css/AlbumList.css'
import { ArtistAlbums } from '../../../interfaces/ArtistPageInterfaces'
import AlbumItem from './AlbumItem'
import AlbumListHeader from './AlbumListHeader'


const AlbumList = ({albums, name}: ArtistAlbums) => {
    return (
        <section className="album-list">

            <AlbumListHeader>{name}</AlbumListHeader>

            <section className="container">

                {
                    albums.map((x, i) => (
                        <AlbumItem
                            key={i}
                            name={x.name}
                            id={x.id}
                            date={x.date}
                            image={x.image}
                        />
                    ))
                }

            </section>

        </section>
    )
}


export default AlbumList