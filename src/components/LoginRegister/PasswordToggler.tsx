import React from 'react'
import { AiFillEye } from 'react-icons/ai'
import Icon from '../Common/Icon'

const PasswordToggler = () => {
    const togglePassword = (e: React.MouseEvent): void => {
        const t: HTMLElement = e.currentTarget! as HTMLElement,
              input: HTMLInputElement = t.parentElement!.children[0] as HTMLInputElement


        input.classList.toggle('show')

        if (input.classList.contains('show')) {
            const span = document.createElement('span')
            t.appendChild(span)

            input.type = 'text'

            return
        }

        for (const element of [...t.children])
            if (element.tagName === 'SPAN')
                element.remove()


        input.type = 'password'
    }


    return (
        <Icon action={togglePassword} cname='toggler'>
            <AiFillEye />
        </Icon>
    )
}

export default PasswordToggler