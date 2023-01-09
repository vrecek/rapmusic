import React from 'react'
import { Wrap } from '../../interfaces/LayoutInterfaces'
import scrollLayoutEvent from '../../util/scrollLayoutEvent'
import LayoutArrow from './LayoutArrow'
import LayoutFooter from './LayoutFooter/LayoutFooter'
import LayoutNavigation from './LayoutNavigation/LayoutNavigation'

const LayoutWrap = ({children, cname}: Wrap) => {
    React.useEffect(() => {
        scrollLayoutEvent()
    }, [])
    

    return (
        <>

            <LayoutNavigation cname={cname} />

            {children}

            <LayoutFooter />

            <LayoutArrow />

        </>
    )
}

export default LayoutWrap