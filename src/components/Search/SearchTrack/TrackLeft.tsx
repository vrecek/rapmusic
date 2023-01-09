import React from 'react'
import { MdAlbum } from 'react-icons/md'
import { SearchPageTrackLeft } from '../../../interfaces/SearchInterfaces'
import Icon from '../../Common/Icon'

const TrackLeft = ({author, name, album}: SearchPageTrackLeft) => {
    return (
        <section className="left">

            <p className="author">{author}</p>

            <p className="name">{name}</p>

            <p className="album">
                <Icon><MdAlbum /></Icon>
                {album}
            </p>

        </section>
    )
}

export default TrackLeft