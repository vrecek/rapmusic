import React from 'react'

const Feats = ({authors}: {authors: string[]}) => {
    const len: number = authors.length - 2


    return (
        <>
            {
                authors.length > 1 && (
                    <div className="feats">
                        <p>Feat: </p>

                        {
                            authors.slice(1).map((x, i) => (
                                <span key={i}>
                                    {x}{i !== len && <>,</>} 
                                </span>
                            ))
                        }
                    </div>  
                )
            }

        </>
    )
}

export default Feats