import React from 'react'

const Authors = ({authors}: {authors: string[]}) => {
    return (
        <div className="authors">

            {
                authors.map((x, i) => (
                    <p key={i}> 
                        {x}
                    </p>
                ))
            }

        </div>
    )
}

export default Authors