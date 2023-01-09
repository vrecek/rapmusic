import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { TrackRelated } from '../../../../interfaces/TrackPageInterfaces'

const OtherTracks = ({tracks}: {tracks: TrackRelated[]}) => {
    const n: NavigateFunction = useNavigate()


    return (
        <ul>

            {
                tracks.map((x, i) => (
                    <li onClick={() => n(`/track/${x.id}`)} key={i}>
                        {x.name}
                    </li>
                ))
            }

        </ul>
    )
}

export default OtherTracks