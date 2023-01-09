import React from 'react'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { TilesImages } from '../../../../interfaces/HomeInterfaces'
import Icon from '../../../Common/Icon'

const RadioButtons = ({setter, all}: TilesImages) => {
    const handleTileIndex = (parent: HTMLElement, total: number, dir: 'top' | 'btm'): number => {
        const mod: number = dir === 'top'
            ? -1
            : 1
    
    
        let i: number = parseInt(parent.getAttribute('ix') ?? '0') + mod
    

        if (i > total - 1)
            i = 0
    
        else if (i < 0)
            i = total - 1
        

        parent.setAttribute('ix', i.toString())

        return i
    }

    const setArtist = (e: React.MouseEvent, dir: 'top' | 'btm'): void => {
        const t: HTMLElement = e.currentTarget as HTMLElement,
              parent: HTMLElement = t.parentElement!.parentElement!.children[1] as HTMLElement,
              ix: number = handleTileIndex(parent, all.length, dir)


        for (const img of parent.children)
            img.className = ''


        parent.children[ix].className = 'active'

        setter(all[ix])
    }


    return (
        <section className="buttons">

            <Icon action={(e) => setArtist(e, 'top')} cname='top'>
                <MdOutlineArrowBackIosNew />
            </Icon>

            <Icon action={(e) => setArtist(e, 'btm')} cname='btm'>
                <MdOutlineArrowBackIosNew />
            </Icon>

        </section>
    )
}

export default RadioButtons