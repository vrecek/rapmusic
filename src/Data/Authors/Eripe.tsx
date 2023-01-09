import { ArtistType } from "../../interfaces/ArtistType";
import { getArtistStatistics } from "../../util/ArtistFunctions";
import {getRandomComments} from '../../util/CommentFunctions'
import Eripe_ChamskieRzeczy from "../Albums/Eripe/Eripe_ChamskieRzeczy";
import Eripe_Odium from "../Albums/Eripe/Eripe_Odium";
import Eripe_Opium from "../Albums/Eripe/Eripe_Opium";
import Eripe_Podium from "../Albums/Eripe/Eripe_Podium";
import image from '../../images/Artists/Eripe.jpg'
import bgimage from '../../images/Artists/Eripe_Background.jpg'
import { FaBirthdayCake, FaUserEdit } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";


const Author_Eripe: ArtistType = {
    name: 'Eripe',
    image: image,
    backgroundImage: bgimage,
    desc: `Rapper from Krakow. A representative of the Patokalips team. Currently, he plays a lot of concerts in cities all over Poland. His style is characterized by sharp, strong and sick lyrics and a dark atmosphere.
    
    His first illegal - Chamskie rzeczy was released in May 2012. The Album was full of strong, uncompromising and controversial rap, which includes a whole lot of punchlines`,
    informations: [
        { what: 'Full name', value: 'Sebastian Głowacz', icon: <FaUserEdit /> },
        { what: 'Birthday', value: '22 April 1989', icon: <FaBirthdayCake /> },
        { what: 'Group', value: 'Patokalipsa', icon: <HiOutlineUserGroup />},
    ],
    albums: [
        Eripe_ChamskieRzeczy,
        Eripe_Odium,
        Eripe_Opium,
        Eripe_Podium
    ],
    views: getArtistStatistics('Eripe', 'views'),
    likes: getArtistStatistics('Eripe', 'likes'),
    comments: getRandomComments()
}


export default Author_Eripe