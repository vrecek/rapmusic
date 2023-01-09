import React from 'react'
import { ObjectInfo } from '../../../interfaces/AlbumType'
import Icon from '../../Common/Icon'

const ListInformations = ({what, value, icon}: ObjectInfo) => {
    return (
        <li>
            <p className='what'>
                { icon && <Icon>{icon}</Icon>}
                {what}
            </p>

            <p className='value'>{value}</p>
        </li>
    )
}

export default ListInformations