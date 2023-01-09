import React from 'react'
import Query from './Query'
import Searchbar from '../../Common/Searchbar'
import { Aliases } from '../../../util/Client'


const SearchEntry = ({children}: Aliases.Text) => {
    return (
        <section className="search-entry">

            <Query>{children}</Query>

            <Searchbar cname='searchbar' />

        </section>
    )
}

export default SearchEntry