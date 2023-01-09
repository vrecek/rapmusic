import React from 'react'
import '../../../css/Blog.css'
import ArticleItem from './ArticleItem'
import BlogHeader from './BlogHeader'
import ArticlesData from '../../../Data/Articles/ArticlesData'


const Blog = () => {
    return (
        <section className="blog">

            <BlogHeader />

            <section className="container">

                {
                    ArticlesData.map(x => (
                        <ArticleItem
                            key={x.id}
                            image={x.image}
                            tags={x.tags}
                            category={x.category}
                            desc={x.text}
                            header={x.title}
                            id={x.id}
                        />
                    ))
                }

            </section>

        </section>
    )
}


export default Blog