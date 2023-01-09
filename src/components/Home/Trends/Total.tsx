import React from 'react'
import { AiOutlineEye, AiOutlineLike } from 'react-icons/ai'
import { PositionDetails } from '../../../interfaces/HomeInterfaces'
import Icon from '../../Common/Icon'

const Total = ({likes, views}: PositionDetails) => {
    const nrFormat = new Intl.NumberFormat('en', {
        notation: 'compact'
    })


    return (
        <section className="total">

            <div>
                <Icon><AiOutlineEye /></Icon>
                {nrFormat.format(views)}
            </div>

            <div>
                <Icon><AiOutlineLike /></Icon>
                {nrFormat.format(likes)}
            </div>

        </section>
    )
}

export default Total