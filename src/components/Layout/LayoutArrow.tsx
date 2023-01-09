import React from 'react'
import { BsFillArrowUpSquareFill } from 'react-icons/bs'
import Icon from '../Common/Icon'

const LayoutArrow = () => {
    const scrollOptions = {
        left: 0,
        top: 0,
        behavior: 'smooth' as ScrollBehavior
    }
    

    return (
        <Icon cname='layout-arrow' action={() => window.scrollTo(scrollOptions)}>
            
            <BsFillArrowUpSquareFill />

        </Icon>
    )
}

export default LayoutArrow