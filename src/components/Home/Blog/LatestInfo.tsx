import React from 'react'
import { HiArrowLongRight } from 'react-icons/hi2'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { ArticleType } from '../../../interfaces/ArticleInterfaces'
import { getRandomArticle } from '../../../util/ArticleFunctions'
import Icon from '../../Common/Icon'

const LatestInfo = () => {
    const {id, title, date}: ArticleType = getRandomArticle(),
          n: NavigateFunction = useNavigate()


    return (
        <div className="latest">

            <p onClick={() => n(`/article/${id}`)} className="latest">
                Latest article
                <Icon><HiArrowLongRight /></Icon>
            </p>
                
            <p className="date">{date}</p>
            <p className="title">{title}</p>

        </div>
    )
}

export default LatestInfo