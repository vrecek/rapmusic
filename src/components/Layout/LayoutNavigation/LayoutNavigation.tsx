import React from 'react'
import '../../../css/LayoutNavigation.css'
import Image from '../../Common/Image'
import logo from '../../../images/logo.png'
import RightSection from './RightSection'
import { NavigateFunction, useNavigate } from 'react-router-dom'


const LayoutNavigation = ({cname}: {cname?: string}) => {
    const n: NavigateFunction = useNavigate()


    return (
        <nav className={`layout-navigation ${cname ?? ''}`}>

            <Image action={() => n('/')} cname='logo-nav' source={logo} altTxt='Logo' />

            <RightSection />

        </nav>
    )
}


export default LayoutNavigation