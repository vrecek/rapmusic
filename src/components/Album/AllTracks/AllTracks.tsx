import React from 'react'
import '../../../css/AllTracks.css'
import { TrackType } from '../../../interfaces/TrackType'
import OneTrack from './OneTrack'


const AllTracks = ({tracks}: {tracks: TrackType[]}) => {
    return (
        <section className="all-tracks">

            <p className="header">Tracklist</p>

            <section className="container">

                {
                    tracks.map((x, i) => (
                        <OneTrack
                            key={x.id}
                            num={i + 1}
                            id={x.id}
                            name={x.name}
                            authors={x.authors}
                            length={x.length}
                        />
                    ))
                }

            </section>

        </section>
    )
}
 

export default AllTracks