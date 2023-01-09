import React from 'react'
import { LogregWrapper } from '../../interfaces/LogregInterfaces'
import Button from '../Common/Button'

const Wrapper = ({cname, children, text}: LogregWrapper) => {
    return (
        <main className={`logreg ${cname}`}>

            <form>

                <p className="header">{text}</p>

                { children }

                <Button text={text} />

            </form>

        </main>
    )
}

export default Wrapper