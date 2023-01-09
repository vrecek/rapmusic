import React from 'react'
import { BsHeadphones } from 'react-icons/bs'
import { HomeTrackAuthor } from '../../../../interfaces/HomeInterfaces'
import Icon from '../../../Common/Icon'
import Feats from '../../../Track/Informations/Feats'

const TitleAuthor = ({authors, name, album, production}: HomeTrackAuthor) => {
    return (
        <section className="title-author">

            <p className="ta">
                <span>{authors[0]} - </span>
                {name}
            </p>

            <p className="production">prod. {production}</p>

            <Feats authors={authors} />
            
            <p className="from">
                <span>From: </span>
                {album}
            </p>

            <Icon cname='icon'>
                <BsHeadphones />
            </Icon>

        </section>
    )
}

export default TitleAuthor