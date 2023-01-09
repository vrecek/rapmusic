import React from 'react'
import { HomeBlogDetails } from '../../../interfaces/HomeInterfaces'
import Tags from './Tags'

const Details = ({tags, category}: HomeBlogDetails) => {
    return (
        <section className="details">

            <Tags tags={tags} />

            <p className="category">{category}</p>

        </section>
    )
}

export default Details