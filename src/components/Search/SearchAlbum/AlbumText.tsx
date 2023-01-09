import React from 'react'
import { SearchPageAlbumText } from '../../../interfaces/SearchInterfaces'

const AlbumText = ({author, name}: SearchPageAlbumText) => {
    return (
        <section>

            <p className="author">{author}</p>
            <p className="name">{name}</p>

        </section>
    )
}

export default AlbumText