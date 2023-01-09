import React from 'react'
import InputDiv from '../InputDiv'
import PasswordToggler from '../PasswordToggler'

const PasswordWrapper = () => {
    return (
        <div className="passwords">

            <InputDiv additional={<PasswordToggler />} text='Password' type='password' />
            <InputDiv additional={<PasswordToggler />} text='Confirm password' type='password' />

        </div>
    )
}

export default PasswordWrapper