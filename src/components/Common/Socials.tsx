import React from 'react'
import Icon from './Icon'
import {AiFillFacebook} from 'react-icons/ai'
import {FaInstagramSquare, FaGithubSquare} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'


const Socials = () => {
    return (
        <section className="socials">

            <Icon><AiFillFacebook /></Icon>
            <Icon><FaGithubSquare /></Icon>
            <Icon><BsLinkedin /></Icon>
            <Icon><FaInstagramSquare /></Icon>

        </section>
    )
}

export default Socials