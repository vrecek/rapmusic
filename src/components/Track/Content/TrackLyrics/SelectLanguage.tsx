import React from 'react'
import { LanguageLyricsSection } from '../../../../interfaces/TrackPageInterfaces'

const SelectLanguage = ({lyrics, setLyrics}: LanguageLyricsSection) => {
    const entries: [string, string][] = Object.entries(lyrics)

    const changeLang = (e: React.MouseEvent, i: number, text: string): void => {
        const t: HTMLElement = e.currentTarget! as HTMLElement,
              span: HTMLElement = t.parentElement!.children[0].children[0] as HTMLElement


        span.style.translate = `${i * 100}% 0`

        setLyrics(text)
    }


    return (
        <section className="select-language">

            {
                entries.map((x, i) => (
                    <p key={i} onClick={(e) => changeLang(e, i, x[1])}>
                        {x[0]}
                        {i === 0 && <span></span>}
                    </p>
                ))
            }

        </section>
    )
}

export default SelectLanguage