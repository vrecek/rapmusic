import React from 'react'
import Icon from '../../Common/Icon'
import {IoIosSearch} from 'react-icons/io'


const SearchIcon = () => {
    const toggleSearch = (e: React.MouseEvent): void => {
        const t: HTMLElement = e.currentTarget! as HTMLElement,
              bar: HTMLElement = [...t.parentElement!.parentElement!.children].slice(-2)[0] as HTMLElement


        bar.classList.toggle('active')

        bar.style.translate = bar.classList.contains('active') 
            ? '0 0'
            : '100% 0'
    }


    return (
        <Icon action={toggleSearch} cname='nav-icon'>
            <IoIosSearch />
        </Icon>
    )
}


export default SearchIcon