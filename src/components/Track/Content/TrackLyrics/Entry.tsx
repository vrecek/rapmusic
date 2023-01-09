import React from 'react'

const Entry = ({lines}: {lines: number}) => {
    return (
        <section className="entry">

            <p className="text">lyrics</p>
            <p className="lines">{lines} lines</p>

        </section>
    )
}

export default Entry