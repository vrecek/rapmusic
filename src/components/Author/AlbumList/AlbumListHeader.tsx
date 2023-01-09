import React from 'react'
import { Aliases } from '../../../util/Client'

const AlbumListHeader = ({children}: Aliases.Text) => {
    return (
        <p className="header">
            {children}'s albums
        </p>
    )
}

export default AlbumListHeader