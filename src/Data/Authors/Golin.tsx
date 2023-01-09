import { ArtistType } from "../../interfaces/ArtistType"
import image from '../../images/Artists/Golin.jpg'
import backgroundImage from '../../images/Artists/Golin_Background.jpg'
import { getArtistStatistics } from "../../util/ArtistFunctions"
import { getRandomComments } from "../../util/CommentFunctions"
import { FaBirthdayCake, FaUserEdit } from "react-icons/fa"
import { HiOutlineUserGroup } from "react-icons/hi"
import Golin_Katakumby from "../Albums/Golin/Golin_Katakumby"


const Author_Golin: ArtistType = {
    name: 'Golin',
    image,
    backgroundImage,
    desc: `Rapper from Toruń, who has lived in several European countries in recent years. He is a polyglot and tireless traveler who has visited over 30 countries so far. As a lover of literature and art, he draws inspiration from the melting pot of cultures and foreign lands`,
    informations: [
        { what: 'Full name', value: 'Unknown', icon: <FaUserEdit /> },
        { what: 'Birthday', value: 'Unknown', icon: <FaBirthdayCake /> },
        { what: 'Group', value: 'None', icon: <HiOutlineUserGroup />}
    ],
    albums: [
        Golin_Katakumby
    ],
    views: getArtistStatistics('Golin', 'views'),
    likes: getArtistStatistics('Golin', 'likes'),
    comments: getRandomComments()
}


export default Author_Golin