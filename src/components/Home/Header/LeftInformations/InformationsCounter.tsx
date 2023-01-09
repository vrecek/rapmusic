import React from 'react'
import { BsFillVinylFill } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import {TbMicrophone2} from 'react-icons/tb'
import { HeaderInformations } from '../../../../interfaces/HomeInterfaces'
import CounterDiv from './CounterDiv'


const InformationsCounter = ({info}: {info: HeaderInformations}) => {
    const {totalAlbums, totalAuthors, totalTracks} = info


    return (
        <section className="counter">

            <CounterDiv icon={<TbMicrophone2 />} what='Tracks' num={totalTracks} />

            <CounterDiv icon={<FaUserAlt />} what='Artists' num={totalAuthors} />

            <CounterDiv icon={<BsFillVinylFill />} what='Albums' num={totalAlbums} />

        </section>
    )
}


export default InformationsCounter