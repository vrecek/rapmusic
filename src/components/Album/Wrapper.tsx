import React from 'react'
import { AlbumWrap } from '../../interfaces/AlbumInterfaces'
import LeftSection from './LeftSection/LeftSection'
import RightSection from './RightSection/RightSection'

const Wrapper = ({image, informations, author, commLen, desc, likes, views, name}: AlbumWrap) => {
    return (
        <div className="wrapper">

            <LeftSection image={image} informations={informations} />
            
            <RightSection 
                author={author} 
                commLen={commLen} 
                desc={desc} 
                likes={likes}
                views={views}
                name={name}
            />

        </div>
    )
}

export default Wrapper