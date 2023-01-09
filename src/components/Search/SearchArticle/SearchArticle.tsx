import React from 'react'
import '../../../css/SearchArticle.css'
import { SearchPageArticle } from '../../../interfaces/SearchInterfaces'
import Image from '../../Common/Image'
import MiscWrap from './MiscWrap'
import TextWrap from './TextWrap'


const SearchArticle = ({image, text, title, category, tags, date}: SearchPageArticle) => {
    return (
        <article className="search-article">

            <Image source={image} altTxt='Article' />

            <section className="right">

                <TextWrap category={category} title={title} />

                <p className="text">{text}</p>

                <MiscWrap date={date} tags={tags} />

            </section>

        </article>
    )
}

export default SearchArticle