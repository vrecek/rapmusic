import React from 'react'
import { TilesInformations } from '../../../../interfaces/HomeInterfaces'
import ListInformations from '../../../Album/LeftSection/ListInformations'


const InformationsTable = ({informations}: TilesInformations) => {
    return (
        <ul className="informations">

            {
                informations.map((x, i) => (
                    <ListInformations 
                        key={i}
                        icon={x.icon!} 
                        value={x.value} 
                        what={x.what} 
                    />
                ))
            }

        </ul>
    )
}


export default InformationsTable