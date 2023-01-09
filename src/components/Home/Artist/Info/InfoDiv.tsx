import React from 'react'
import { ArtistInfoDiv } from '../../../../interfaces/HomeInterfaces'
import Icon from '../../../Common/Icon'

const InfoDiv = ({what, value, icon}: ArtistInfoDiv) => {
    return (
        <div className="div-info">

            <p className="what">
                <Icon>{icon}</Icon> 
                {what}: 
            </p>

            <p className="value">{value}</p>

        </div>
    )
}

export default InfoDiv