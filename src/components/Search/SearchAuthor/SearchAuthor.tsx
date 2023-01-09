import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import '../../../css/SearchAuthor.css'
import { SearchPageAuthor } from '../../../interfaces/SearchInterfaces'
import Image from '../../Common/Image'
import AuthorDetails from './AuthorDetails'


const SearchAuthor = ({image, name, albumNr, views, tracks}: SearchPageAuthor) => {
    const n: NavigateFunction = useNavigate()


    return (
        <article onClick={() => n(`/artist/${name.toLowerCase()}`)} className="search-author">

            <Image source={image} altTxt='Author' />
            
            <section className="right">

                <p className="author">{name}</p>
                <AuthorDetails albumNr={albumNr} tracks={tracks} views={views} />

            </section>

        </article>
    )
}

export default SearchAuthor