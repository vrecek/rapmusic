import React from 'react'
import '../../../css/LayoutFooter.css'
import FooterLogo from './FooterLogo'
import Socials from '../../Common/Socials'
import FooterLinks from './FooterLinks'


const LayoutFooter = () => {
    return (
        <footer className="layout-footer">

            <section className="wrap">

                <FooterLogo />

                <FooterLinks />

            </section>

            <Socials />

            <p className='copy'>Website is not used for profit. All artists and tracks can be seen on the internet</p>

        </footer>
    )
}


export default LayoutFooter