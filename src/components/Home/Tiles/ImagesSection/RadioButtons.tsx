import React from 'react'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { TilesImages } from '../../../../interfaces/HomeInterfaces'
import { handleTileIndex, moveHorizontal, moveVertical } from '../../../../util/HomepageTilesScroll'
import Icon from '../../../Common/Icon'

const RadioButtons = ({setter, all}: TilesImages) => {
    const moveScroll = (iw: number, i: number, container: HTMLElement): void => {
        document.body.clientWidth <= 1000
            ? moveHorizontal(iw, i, container)
            : moveVertical(iw, i, container)
    }

    
    const setArtist = (e: React.MouseEvent, dir: 'top' | 'btm'): void => {
        const t: HTMLElement = e.currentTarget as HTMLElement,
              parent: HTMLElement = t.parentElement!.parentElement!.children[1] as HTMLElement


        for (const img of parent.children)
            img.className = ''


        const ix: number = handleTileIndex(parent, all.length, dir) 
        parent.children[ix].className = 'active'

        moveScroll(
            parent.children[ix].clientWidth, 
            ix,
            parent
        )

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