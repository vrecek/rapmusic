import React from 'react'
import RateDiv from './RateDiv'
import {FiEye} from 'react-icons/fi'
import { AiOutlineLike } from 'react-icons/ai'
import { BiCommentDetail } from 'react-icons/bi'
import { RatingOptions } from '../../../../interfaces/CommonInterfaces'


const Rating = ({views, likes, commLen}: RatingOptions) => {
    return (
        <section className="rating">

            <RateDiv icon={<FiEye />} value={views} />
            <RateDiv icon={<AiOutlineLike />} value={likes} />
            <RateDiv icon={<BiCommentDetail />} value={commLen} />

        </section>
    )
}

export default Rating