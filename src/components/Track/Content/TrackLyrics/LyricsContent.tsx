import React from 'react'
import Entry from './Entry'

const LyricsContent = ({lyrics}: {lyrics: string}) => {
    const lines: number = lyrics.split(/\n/).length


    return (
        <article className="lyrics-content">

            <Entry lines={lines} />

            <p className="lyrics">{lyrics}</p>

        </article>
    )
}

export default LyricsContent