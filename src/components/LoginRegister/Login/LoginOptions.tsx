import React from 'react'
import { Link } from 'react-router-dom'
import Remember from './Remember'

const LoginOptions = () => {
    return (
        <section className="options">

            <Remember />
            <Link to='/register'>Forgot password?</Link>

        </section>
    )
}

export default LoginOptions