import React from 'react'
import { EntryArticle } from '../../interfaces/ArticlePageInterfaces'

const ArticleEntrytext = ({title, date}: EntryArticle) => {
    return (
        <>
        
            <h1>{title}</h1>
            <h2>{date}</h2>

        </>
    )
}

export default ArticleEntrytext