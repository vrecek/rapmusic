import React from 'react'
import '../../../css/TrackComments.css'
import { CommentType } from '../../../interfaces/CommonInterfaces'
import CommentsToggler from './CommentsToggler'
import OneComment from './OneComment'


const Comments = ({comments}: {comments: CommentType[]}) => {
    return (
        <section className="track-comments">

            <CommentsToggler len={comments.length} />

            <section className="container">

                {
                    comments.map((x, i) => (
                        <OneComment
                            key={i}
                            name={x.name}
                            text={x.text}
                            likes={x.likes}
                            dislikes={x.dislikes}
                            date={x.date}
                        />
                    ))
                }

            </section>

        </section>
    )
}

export default Comments