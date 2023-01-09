import React from 'react'
import '../../../../css/TrackAside.css'
import {TrackPageAside} from '../../../../interfaces/TrackPageInterfaces'
import OtherTracks from './OtherTracks'


const TrackAside = ({tracks, author}: TrackPageAside) => {
    return (
        <aside className='track-aside'>

            <p className="header">Other from <span>{author}</span></p>

            <OtherTracks tracks={tracks} />

        </aside>
    )
}


export default TrackAside