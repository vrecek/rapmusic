import React from 'react'
import { HomeBlogText } from '../../../interfaces/HomeInterfaces'

const Text = ({desc, header}: HomeBlogText) => {
    return (
        <div className="text">

            <p className="text-header">{header}</p>
            <p className="desc">{desc}</p>

        </div>
    )
}

export default Text