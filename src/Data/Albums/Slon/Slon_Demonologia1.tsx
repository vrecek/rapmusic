import { AlbumType } from "../../../interfaces/AlbumType";
import { getRandomComments } from "../../../util/CommentFunctions";
import image from '../../../images/Albums/Slon/Demonologia1/Demonologia1.jpg'
import Slon_Demonologia1_Tracks from "../../Tracks/Slon/Demonologia1/Slon_Demonologia1_Tracks";


const Slon_Demonologia1: AlbumType = {
    id: 'vnbchuxqqa',
    author: 'Słoń',
    desc: 'Lorem desvc',
    date: 2010,
    image,
    informations: [
        { what: 'Dolore', value: '202' },
        { what: 'Dolore', value: '202' },
        { what: 'Dolore', value: '202' },
        { what: 'Dolore', value: '202' }
    ],
    likes: Slon_Demonologia1_Tracks.reduce((p, c) => p + c.likes, 0),
    name: 'Demonologia',
    tracks: Slon_Demonologia1_Tracks,
    views: Slon_Demonologia1_Tracks.reduce((p, c) => p + c.views, 0),
    comments: getRandomComments()
}


export default Slon_Demonologia1