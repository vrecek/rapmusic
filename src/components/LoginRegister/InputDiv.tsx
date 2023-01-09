import React from 'react'
import { InputOptions } from '../../interfaces/LogregInterfaces'

const InputDiv = ({text, type, additional}: InputOptions) => {
    return (
        <section className="input">

            <label>{text}</label>

            <div>

                <input spellCheck='false' type={type} />
                {
                    additional
                        && additional
                }

            </div>

        </section>
    )
}

export default InputDiv