import React from 'react'
import { SearchPageArticleText } from '../../../interfaces/SearchInterfaces'

const TextWrap = ({title, category}: SearchPageArticleText) => {
    return (
        <div className='wrap'>

            <p className="title">{title}</p>
            <p className="category">{category}</p>

        </div>
    )
}

export default TextWrap