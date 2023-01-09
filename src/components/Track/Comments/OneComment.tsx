import React from 'react'
import Image from '../../Common/Image'
import blank from '../../../images/blank.jpg'
import CommentRate from './CommentRate'
import CommentDetails from './CommentDetails'
import { CommentType } from '../../../interfaces/CommonInterfaces'


const OneComment = ({likes, dislikes, text, name, date}: CommentType) => {
    return (
        <article className="one-comment">

            <Image source={blank} />

            <section className="wrap">

                <CommentDetails name={name} date={date} />

                <p className="text">{text}</p>

                <CommentRate likes={likes} dislikes={dislikes} />

            </section>

        </article>
    )
}


export default OneComment