import React from 'react'
import '../../../css/Trends.css'
import { getTrendingAlbums } from '../../../util/AlbumFunctions'
import Position from './Position'


const Trends = () => {
    return (
        <section className="trends">

            <p className="header">Trending albums</p>

            <section className="container">

                {
                    getTrendingAlbums().map((x, i) => (
                        <Position
                            key={i}
                            num={i + 1}
                            image={x.image}
                            name={x.name}
                            author={x.author}
                            likes={x.likes}
                            views={x.views}
                            id={x.id}
                        />
                    ))                    
                }

            </section>

        </section>
    )
}


export default Trends