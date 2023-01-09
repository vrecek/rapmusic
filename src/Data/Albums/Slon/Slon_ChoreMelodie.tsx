import { AlbumType } from "../../../interfaces/AlbumType";
import { getRandomComments } from "../../../util/CommentFunctions";
import image from '../../../images/Albums/Slon/ChoreMelodie/ChoreMelodie.jpg'
import Slon_ChoreMelodie_Tracks from "../../Tracks/Slon/ChoreMelodie/Slon_ChoreMelodie_Tracks";


const Slon_ChoreMelodie: AlbumType = {
    id: 'vjgu88881q',
    author: 'Słoń',
    desc: 'Lorem desvc',
    date: 2009,
    image,
    informations: [
        { what: 'Dolore', value: '202' },
        { what: 'Dolore', value: '202' },
        { what: 'Dolore', value: '202' },
        { what: 'Dolore', value: '202' }
    ],
    likes: Slon_ChoreMelodie_Tracks.reduce((p, c) => p + c.likes, 0),
    name: 'Chore melodie',
    tracks: Slon_ChoreMelodie_Tracks,
    views: Slon_ChoreMelodie_Tracks.reduce((p, c) => p + c.views, 0),
    comments: getRandomComments()
}


export default Slon_ChoreMelodie