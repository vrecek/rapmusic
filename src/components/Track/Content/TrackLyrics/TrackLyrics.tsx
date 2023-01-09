import React from 'react'
import '../../../../css/TrackLyrics.css'
import { LyricsLanguage } from '../../../../interfaces/TrackPageInterfaces'
import LyricsContent from './LyricsContent'
import SelectLanguage from './SelectLanguage'


const TrackLyrics = ({lyrics}: LyricsLanguage) => {
    const [currentLyrics, setLyrics] = React.useState<string>(lyrics.Polish)

    
    return (
        <article className="track-lyrics">

            <SelectLanguage setLyrics={setLyrics} lyrics={lyrics} />

            <LyricsContent lyrics={currentLyrics} />

        </article>
    )
}


export default TrackLyrics