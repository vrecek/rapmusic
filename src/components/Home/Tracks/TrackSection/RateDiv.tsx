import React from 'react'
import { Rate } from '../../../../interfaces/HomeInterfaces'
import Icon from '../../../Common/Icon'

const RateDiv = ({icon, value, action}: Rate) => {
    const val: string = new Intl.NumberFormat('en', {
        notation: 'compact'
    }).format(value)

    
    return (
        <div onClick={action} className="rate">

            <Icon>{icon}</Icon>
            <p>{val}</p>

        </div>
    )
}

export default RateDiv