import React from 'react'
import { AlbumType } from '../../../../interfaces/AlbumType'
import ArrowsWrap from './ArrowsWrap'
import DiscsContainer from './DiscsContainer'

const DiscsSection = ({albums}: {albums: AlbumType[]}) => {
    return (
        <section className="discs">

            <p className="small-header">{albums[0].author} creation</p>

            <ArrowsWrap>

                <DiscsContainer albums={albums} />

            </ArrowsWrap>

        </section>
    )
}

export default DiscsSection