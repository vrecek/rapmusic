import React from 'react'
import LayoutWrap from '../Layout/LayoutWrap'
import '../../css/Article.css'
import ArticleDetails from './ArticleDetails'
import Image from '../Common/Image'
import ArticleInformations from './ArticleInformations'
import ArticleEntrytext from './ArticleEntrytext'
import ArticleText from './ArticleText'
import Comments from '../Track/Comments/Comments'
import Socials from '../Common/Socials'
import { NavigateFunction, useNavigate, useParams } from 'react-router-dom'
import { ArticleType } from '../../interfaces/ArticleInterfaces'
import { getOneArticle } from '../../util/ArticleFunctions'


const ARTICLE = () => {
    window.scrollTo(0, 0)

    const [article, setArticle] = React.useState<ArticleType | null>(null),
          {id} = useParams(),
          n: NavigateFunction = useNavigate()
    

    React.useEffect(() => {
        const article = getOneArticle(id ?? '')

        if (!article) {
            n('/', {
                replace: true
            })

            return
        }

        setArticle(article)

    }, [])

    
    if(article) {
        const {image, tags, category, date, likes, dislikes, title, views, comments} = article


        return (
            <LayoutWrap cname='background'>
    
                <main className="article">
    
                    <div className="content-wrap">
    
                        <Socials />
    
                        <div className="content">
    
                            <ArticleEntrytext title={title} date={date} />
    
                            <ArticleDetails likes={likes} dislikes={dislikes} views={views} />
    
                            <Image cname='main' source={image} altTxt='Article' />
    
                            <ArticleInformations tags={tags} category={category} />
    
                            <ArticleText />
    
                        </div>
    
                    </div>
    
                    <Comments comments={comments} />
    
                </main>
    
            </LayoutWrap>
        )
    }

    return <></>
}

export default ARTICLE