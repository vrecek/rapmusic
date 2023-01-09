import React from 'react'
import { DetailsComment } from '../../../interfaces/CommonInterfaces'

const CommentDetails = ({date, name}: DetailsComment) => {
    return (
        <section className="details">

            <p className="author">{name}</p>
            <p className="date">{date}</p>

        </section>
    )
}

export default CommentDetails