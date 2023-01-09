import React from 'react'
import { SearchPageArticleMisc } from '../../../interfaces/SearchInterfaces'
import Tags from '../../Home/Blog/Tags'

const MiscWrap = ({date, tags}: SearchPageArticleMisc) => {
    return (
        <div className='wrap'>

            <p className="date">{date}</p>
            <Tags tags={tags} />

        </div>
    )
}

export default MiscWrap