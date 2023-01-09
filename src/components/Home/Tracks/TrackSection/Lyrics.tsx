import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { HomeTrackLyrics } from '../../../../interfaces/HomeInterfaces'
import Icon from '../../../Common/Icon'

const Lyrics = ({id, text}: HomeTrackLyrics) => {
    return (
        <article className="lyrics">

            <p>
                <Icon cname='icon'><FaQuoteLeft /></Icon>
                {text} 
                <span>...</span>
                <Icon cname='icon'><FaQuoteRight /></Icon>
            </p>

            <Link to={`/track/${id}`}>
                Continue
                <Icon><BsArrowRight /></Icon>
            </Link>

        </article>
    )
}

export default Lyrics