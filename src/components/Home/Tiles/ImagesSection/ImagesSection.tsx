import React from 'react'
import { TilesImages } from '../../../../interfaces/HomeInterfaces'
import Image from '../../../Common/Image'
import RadioButtons from './RadioButtons'

const ImagesSection = ({setter, all}: TilesImages) => {
    const setArtist = (e: React.MouseEvent, name: string): void => {
        const t: HTMLElement = e.currentTarget! as HTMLElement,
              parent: HTMLElement = t.parentElement!,
              allImages: Element[] = [...parent.children]


        for (const img of allImages)
            img.className = ''


        t.className = 'active'


        const index: number = all.findIndex(x => x.name === name)
        setter(all[index])

        parent.setAttribute('ix', index.toString())
    }


    return (
        <section className="images-section">

            <RadioButtons all={all} setter={setter} />

            <section className="container">

                {
                    all.map((x, i) => (
                        <Image
                            action={(e) => setArtist(e, x.name)}
                            cname={i === 0 ? 'active' : ''}
                            key={i}
                            altTxt={x.name}
                            source={x.image}
                        />
                    ))
                }

            </section>

        </section>
    )
}

export default ImagesSection