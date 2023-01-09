import React from 'react'
import '../../../../css/NavigationMenu.css'
import MenuToggler from '../MenuToggler'
import MenuLeft from './MenuLeft'
import MenuRight from './MenuRight'


const NavigationMenu = () => {
    return (
        <section className="navigation-menu">

            <MenuToggler />

            <aside>

                <MenuLeft />
                <MenuRight />

            </aside>

        </section>
    )
}


export default NavigationMenu