import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { TrendPosition } from '../../../interfaces/HomeInterfaces'
import Image from '../../Common/Image'
import Total from './Total'

const Position = ({num, image, name, author, id, likes, views}: TrendPosition) => {
    const n: NavigateFunction = useNavigate()


    return (
        <article onClick={() => n(`/album/${id}`)}>

            <p className="num">{num}</p>

            <Image source={image} altTxt='Image' />

            <p className="name">{name}</p>

            <p className="author">{author}</p>

            <Total likes={likes} views={views} />

        </article>
    )
}

export default Position