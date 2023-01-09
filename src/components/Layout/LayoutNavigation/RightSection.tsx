import React from 'react'
import { Link } from 'react-router-dom'
import Searchbar from '../../Common/Searchbar'
import NavigationMenu from './Menu/NavigationMenu'
import MenuToggler from './MenuToggler'
import SearchIcon from './SearchIcon'


const RightSection = () => {
    return (
        <section className="right-section">

            <Link className='join' to='/register'>Join us</Link>
            <Link className='sign' to='/sign-in'>Sign in</Link>
            
            <section className="icon-container">

                <SearchIcon />
                <MenuToggler />

            </section>

            <Searchbar cname='nav-search' />
            <NavigationMenu />

        </section>
    )
}


export default RightSection