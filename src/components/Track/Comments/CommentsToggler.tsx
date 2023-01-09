import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import Client, { DD } from '../../../util/Client'
import Icon from '../../Common/Icon'

const CommentsToggler = ({len}: {len: number}) => {
    const toggler: DD.DropDown = new Client.DropDown(300)
    
    const toggleComments = (e: React.MouseEvent): void => {
        const t: HTMLElement = e.currentTarget as HTMLElement,
              arrow: HTMLElement = t.children[0] as HTMLElement,    
              container: HTMLElement = t.parentElement!.children[1] as HTMLElement

        
        toggler.getActive
            ? toggler.expandMenu(container)
            : toggler.shrinkMenu(container)


        toggler.switchActive()
        toggler.rotateArrow(arrow)
    }


    return (
        <p onClick={toggleComments} className="comment-toggler">
            Comments ({len})
            <Icon><IoIosArrowDown /></Icon>
        </p>
    )
}

export default CommentsToggler