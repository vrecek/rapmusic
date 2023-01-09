import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import '../../../css/SearchAlbum.css'
import { SearchPageAlbum } from '../../../interfaces/SearchInterfaces'
import Image from '../../Common/Image'
import AlbumMisc from './AlbumMisc'
import AlbumText from './AlbumText'


const SearchAlbum = ({image, name, id, author, tracksNr, commLen, likes, views}: SearchPageAlbum) => {
    const n: NavigateFunction = useNavigate()


    return (
        <article onClick={() => n(`/album/${id}`)} className="search-album">

            <Image source={image} altTxt='Album' />

            <section className="right">

                <AlbumText author={author} name={name} />

                <AlbumMisc
                    commLen={commLen}
                    likes={likes}
                    tracksNr={tracksNr}
                    views={views}
                />                

            </section>

        </article>
    )
}

export default SearchAlbum