import React from 'react'
import NavigationLinksArray from '../../../../util/Links/NavigationLinksArray'
import OtherLinksArray from '../../../../util/Links/OtherLinksArray'
import Links from '../../../Common/Links'
import Socials from '../../../Common/Socials'

const MenuLeft = () => {
    return (
        <section className="left-menu">

            <Links links={[...NavigationLinksArray, ...OtherLinksArray]} />

            <Socials />

        </section>
    )
}

export default MenuLeft