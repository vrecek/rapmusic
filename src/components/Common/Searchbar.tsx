import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { searchEnterQuery } from '../../util/searchFunctions'
import Icon from './Icon'

const Searchbar = ({cname}: {cname: string}) => {
    const n: NavigateFunction = useNavigate()


    return (
        <section className={cname}>

            <div>

                <input onKeyUp={(e) => searchEnterQuery(e, n)} placeholder='Search...' type='text' spellCheck='false' />
                <Icon><BsSearch /></Icon>

            </div>

        </section>
    )
}

export default Searchbar