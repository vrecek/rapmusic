import React from 'react'
import { Aliases } from '../../../util/Client'

const Query = ({children}: Aliases.Text) => {
    return (
        <section className="query">

            <p className="results">Results for</p>
            <p className="query">{children}</p>

        </section>
    )
}

export default Query