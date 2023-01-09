import React from 'react'
import { Link } from 'react-router-dom'
import { LinksComponent } from '../../interfaces/CommonInterfaces'

const Links = ({links, ulCname}: LinksComponent) => {
    return (
        <ul className={ulCname ?? 'links'}>

            {
                links.map((x, i) => (

                    <li className={x.cname ?? ''} key={i}>
                        <Link to={x.url}>
                            {x.text}
                        </Link>
                    </li>

                ))
            }

        </ul>
    )
}

export default Links