import { ArtistType } from "../../interfaces/ArtistType"
import Slon_ChoreMelodie from "../Albums/Slon/Slon_ChoreMelodie"
import image from '../../images/Artists/Slon.jpg'
import backgroundImage from '../../images/Artists/Slon_Background.jpg'
import { getArtistStatistics } from "../../util/ArtistFunctions"
import { getRandomComments } from "../../util/CommentFunctions"
import { FaBirthdayCake, FaUserEdit } from "react-icons/fa"
import { HiOutlineUserGroup } from "react-icons/hi"
import Slon_Demonologia1 from "../Albums/Slon/Slon_Demonologia1"


const Author_Slon: ArtistType = {
    name: 'Słoń',
    image,
    backgroundImage,
    desc: `Polish rapper from Poznań, who represents the horrorcore trend. It is the most famous representative of this subspecies in Poland. He leads a solo career and co-creates the composition of WSRH.
    
    He began his artistic activity in the first decade of the 21st century, however, he made his first attempts at rapping already during his school years. In 2009, Słoń's solo debut titled Chore melodies was released. The material maintained in the style of horrorcore, which was not very popular on the domestic market at the time, but made the rapper popular in the artistic underground.`,
    informations: [
        { what: 'Full name', value: 'Wojciech Zawadzki', icon: <FaUserEdit /> },
        { what: 'Birthday', value: '27 Nov 1983', icon: <FaBirthdayCake /> },
        { what: 'Group', value: 'Brain Dead Familia', icon: <HiOutlineUserGroup />}
    ],
    albums: [
        Slon_ChoreMelodie,
        Slon_Demonologia1
    ],
    views: getArtistStatistics('Słoń', 'views'),
    likes: getArtistStatistics('Słoń', 'likes'),
    comments: getRandomComments()
}


export default Author_Slon