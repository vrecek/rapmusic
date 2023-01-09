import React from 'react'
import LayoutWrap from '../../Layout/LayoutWrap'
import '../../../css/LoginRegister.css'
import '../../../css/Register.css'
import Wrapper from '../Wrapper'
import InputDiv from '../InputDiv'
import PasswordWrapper from './PasswordWrapper'


const REGISTER = () => {
    window.scrollTo(0, 0)


    return (
        <LayoutWrap cname='background'>

            <Wrapper text='Register' cname='register'>

                <InputDiv text='Username' type='text' />
                <InputDiv text='Mail address' type='text' />
                <PasswordWrapper />

            </Wrapper>

        </LayoutWrap>
    )
}

export default REGISTER