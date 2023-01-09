import React from 'react'
import { HiOutlineMenu } from 'react-icons/hi'
import Icon from '../../Common/Icon'

const MenuToggler = () => {
    const toggleMenu = (e: React.MouseEvent): void => {
        const t: HTMLElement = e.currentTarget! as HTMLElement,
                 section: HTMLElement = [...t.parentElement!.parentElement!.children].slice(-1)[0] as HTMLElement


        section.classList.toggle('active')

        section.style.translate = section.classList.contains('active')
            ? '0 0' 
            : '0 -100%'
    }


    return (
        <Icon cname='menu-toggler' action={toggleMenu}>
            <HiOutlineMenu />
        </Icon>
    )
}

export default MenuToggler