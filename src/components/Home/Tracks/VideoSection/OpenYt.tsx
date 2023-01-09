import React from 'react'
import { BsYoutube } from 'react-icons/bs'
import Icon from '../../../Common/Icon'

const OpenYt = ({link}: {link: string}) => {
    return (
        <section onClick={() => window.open(link, '_blank')} className="open-yt">

            <p>Open in YouTube</p>

            <Icon><BsYoutube /></Icon>

        </section>
    )
}

export default OpenYt