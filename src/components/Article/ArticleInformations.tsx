import React from 'react'
import { InformationsArticle } from '../../interfaces/ArticlePageInterfaces'
import Tags from '../Home/Blog/Tags'

const ArticleInformations = ({tags, category}: InformationsArticle) => {
    return (
        <section className="article-informations">

            <Tags tags={tags} />

            <h3>{category}</h3>

        </section>
    )
}

export default ArticleInformations