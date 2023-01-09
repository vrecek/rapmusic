import React from 'react'
import { AiFillEye } from 'react-icons/ai'
import { BsMusicNoteBeamed } from 'react-icons/bs'
import { MdAlbum } from 'react-icons/md'
import { SearchPageAuthorDetails } from '../../../interfaces/SearchInterfaces'
import RateDiv from '../../Home/Tracks/TrackSection/RateDiv'

const AuthorDetails = ({albumNr, tracks, views}: SearchPageAuthorDetails) => {
    return (
        <section className="details">

            <RateDiv icon={<MdAlbum />} value={albumNr} />
            <RateDiv icon={<BsMusicNoteBeamed />} value={tracks} />
            <RateDiv icon={<AiFillEye />} value={views} />

        </section>
    )
}

export default AuthorDetails