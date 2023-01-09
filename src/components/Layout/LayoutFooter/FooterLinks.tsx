import React from 'react'
import NavigationLinksArray from '../../../util/Links/NavigationLinksArray'
import OtherLinksArray from '../../../util/Links/OtherLinksArray'
import Links from '../../Common/Links'

const FooterLinks = () => {
    return (
        <section className='footer-links'>

            <p className="header">Navigation</p>
            
            <div>

                <Links links={NavigationLinksArray} />
                <Links links={OtherLinksArray} />

            </div>

        </section>
    )
}

export default FooterLinks