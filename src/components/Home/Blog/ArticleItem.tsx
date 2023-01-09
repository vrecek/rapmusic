import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { HomeBlog } from '../../../interfaces/HomeInterfaces'
import Button from '../../Common/Button'
import Image from '../../Common/Image'
import Details from './Details'
import Text from './Text'

const ArticleItem = ({image, header, desc, id, tags, category}: HomeBlog) => {
    const n: NavigateFunction = useNavigate()


    return (
        <article className="article-item">

            <Image source={image} altTxt='Article' />

            <section className="text">

                <Details tags={tags} category={category} />
                
                <Text header={header} desc={desc} />

                <Button action={() => n(`/article/${id}`)} text='Read more' />

            </section>

        </article>
    )
}

export default ArticleItem