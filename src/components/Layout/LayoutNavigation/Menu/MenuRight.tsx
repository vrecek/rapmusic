import React from 'react'
import logo from '../../../../images/logo.png'
import Image from '../../../Common/Image'
import Searchbar from '../../../Common/Searchbar'


const MenuRight = () => {
    return (
        <section className="right-menu">

            <Searchbar cname='searchbar' />

            <Image cname='logo' source={logo} altTxt='Logo' />

        </section>
    )
}

export default MenuRight