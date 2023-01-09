import React from 'react'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'
import { Aliases } from '../../../../util/Client'
import Icon from '../../../Common/Icon'

const ArrowsWrap = ({children}: Aliases.Text<JSX.Element>) => {
    const scrollMove = (e: React.MouseEvent, type: 'left' | 'right'): void => {
        const t: HTMLElement = e.currentTarget! as HTMLElement,
              container: HTMLElement = t.parentElement!.children[1] as HTMLElement


        container.scrollLeft += type === 'right'
            ? 100
            : -100
    }


    return (
        <section className="wrap">

            <Icon action={(e) => scrollMove(e, 'left')} cname='arrow-icon'><BsArrowLeftCircle /></Icon>

            {children}

            <Icon action={(e) => scrollMove(e, 'right')} cname='arrow-icon'><BsArrowRightCircle /></Icon>

        </section>
    )
}

export default ArrowsWrap