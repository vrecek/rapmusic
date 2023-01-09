import React from 'react'
import '../../../css/Header.css'
import { HeaderInformations } from '../../../interfaces/HomeInterfaces'
import LeftInformations from './LeftInformations/LeftInformations'
import RightInformations from './RightInformations/RightInformations'


const Header = ({info}: {info: HeaderInformations}) => {
    return (
        <header className="home-header">

            <LeftInformations info={info} />
            <RightInformations />

        </header>
    )
}


export default Header