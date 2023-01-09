import React from 'react'
import Button from '../../../Common/Button'
import { MdAlbum } from 'react-icons/md'
import { FaUserEdit } from 'react-icons/fa'
import {scroller} from 'react-scroll'


const HeaderButtons = () => {
    const scrlOpt = {
        offset: -75,
        smooth: true
    }


    return (
        <section className="buttons">

            <Button action={() => scroller.scrollTo('tiles', scrlOpt)} additional={<FaUserEdit />} cname='artists' text='Artists' />
            <Button action={() => scroller.scrollTo('trends', scrlOpt)} additional={<MdAlbum />} cname='albums' text='Albums' />

        </section>
    )
}


export default HeaderButtons