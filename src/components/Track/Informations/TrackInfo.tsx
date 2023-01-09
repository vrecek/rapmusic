import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { TrackInfoSection } from '../../../interfaces/TrackPageInterfaces'
import Feats from './Feats'
import TrackMisc from './TrackMisc'

const TrackInfo = ({authors, name, album, production, length}: TrackInfoSection) => {
    const n: NavigateFunction = useNavigate()


    return (
        <>
            <p onClick={() => n(`/artist/${authors[0]}`)} className="author">{authors[0]}</p>

            <Feats authors={authors} />
            
            <div>
                <p className="name">{name}</p>
                <p className="prod">prod. {production}</p>
            </div>

            <TrackMisc length={length} album={album} />
        </>
    )
}

export default TrackInfo