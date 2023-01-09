import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { HomeArtistAlbum } from '../../../../interfaces/HomeInterfaces'
import Image from '../../../Common/Image'

const OneDisc = ({img, id}: HomeArtistAlbum) => {
    const n: NavigateFunction = useNavigate()


    return (
        <div onClick={() => n(`/album/${id}`)} className="disc">

            <Image source={img} altTxt='Disc' />

        </div>
    )
}

export default OneDisc