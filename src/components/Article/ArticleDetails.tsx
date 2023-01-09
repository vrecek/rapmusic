import React from 'react'
import RateDiv from '../Home/Tracks/TrackSection/RateDiv'
import {AiFillEye, AiOutlineDislike, AiOutlineLike} from 'react-icons/ai'
import { DetailsArticle } from '../../interfaces/ArticlePageInterfaces'


const ArticleDetails = ({likes, views, dislikes}: DetailsArticle) => {
    const rateArticle = (e: React.MouseEvent, type: 'like' | 'dislike'): void => {
        const t: HTMLElement = e.currentTarget as HTMLElement,
              secondElem: HTMLElement = t.parentElement!.children[type === 'like' ? 1 : 0] as HTMLElement,
              secondType: string = type === 'like' ? 'dislike' : 'like'


        t.classList.toggle(type)

        if (secondElem.classList.contains(secondType))
            secondElem.classList.toggle(secondType)
    }


    return (
        <section className="article-details">

            <RateDiv action={(e) => rateArticle(e, 'like')} icon={<AiOutlineLike />} value={likes} />
            <RateDiv action={(e) => rateArticle(e, 'dislike')} icon={<AiOutlineDislike />} value={dislikes} />
            <RateDiv icon={<AiFillEye />} value={views} />

        </section>
    )
}

export default ArticleDetails