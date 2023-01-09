import React from 'react'

type ButtonOptions = {
    text: string
    additional?: JSX.Element | string | number
    cname?: string
    action?: React.MouseEventHandler
}

const Button = ({text, additional, cname, action}: ButtonOptions) => {
    const pointerStyles: React.CSSProperties = {
        pointerEvents: 'none'
    }

    return (
        <button onClick={action} className={cname ?? ''}>

            <label style={pointerStyles}>
                {text}
            </label>

            {
                additional
                    && <span style={pointerStyles}>
                            {additional}
                        </span>
            }

        </button>
    )
}

export default Button