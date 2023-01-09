import React from 'react'
import LayoutWrap from '../../Layout/LayoutWrap'
import '../../../css/LoginRegister.css'
import '../../../css/Login.css'
import Wrapper from '../Wrapper'
import InputDiv from '../InputDiv'
import PasswordToggler from '../PasswordToggler'
import LoginOptions from './LoginOptions'


const LOGIN = () => {
    window.scrollTo(0, 0)

    
    return (
        <LayoutWrap cname='background'>

            <Wrapper text='Sign in' cname='login'>

                <InputDiv text='Username' type='text' />
                <InputDiv additional={<PasswordToggler />} text='Password' type='password' />
                <LoginOptions />

            </Wrapper>

        </LayoutWrap>
    )
}

export default LOGIN