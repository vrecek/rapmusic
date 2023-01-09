import React from 'react'
import { CounterInfo } from '../../../../interfaces/HomeInterfaces'
import Icon from '../../../Common/Icon'

const CounterDiv = ({num, what, icon}: CounterInfo) => {
    return (
        <div>

            <p className="num">{num}</p>

            <p className="what">{what}</p>

            <Icon>{icon}</Icon>

        </div>
    )
}

export default CounterDiv