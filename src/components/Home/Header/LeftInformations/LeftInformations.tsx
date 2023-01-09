import React from 'react'
import { HeaderInformations } from '../../../../interfaces/HomeInterfaces'
import InformationsCounter from './InformationsCounter'

const LeftInformations = ({info}: {info: HeaderInformations}) => {
    return (
        <section className="left-informations">

            <h1>Lorem ipsum - detailed website about <span>polish rap</span> music</h1>

            <InformationsCounter info={info} />

        </section>
    )
}

export default LeftInformations