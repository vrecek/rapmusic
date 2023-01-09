import React from 'react'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { RatingComment } from '../../../interfaces/CommonInterfaces'
import Icon from '../../Common/Icon'

const CommentRate = ({likes, dislikes}: RatingComment) => {
    return (
        <section className="rating">

            <div className='likes'>
                <Icon><AiOutlineLike /></Icon>
                {likes}
            </div>

            <div className='dislikes'>
                <Icon><AiOutlineDislike /></Icon>
                {dislikes}
            </div>

        </section>
    )
}

export default CommentRate