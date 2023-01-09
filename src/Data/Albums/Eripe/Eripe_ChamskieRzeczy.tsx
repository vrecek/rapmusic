import { AlbumType } from "../../../interfaces/AlbumType";
import { getRandomComments } from "../../../util/CommentFunctions";
import image from '../../../images/Albums/Eripe/ChamskieRzeczy/ChamskieRzeczy.jpg'
import Eripe_ChamskieRzeczy_Tracks from "../../Tracks/Eripe/ChamskieRzeczy/Eripe_ChamskieRzeczy_Tracks";


const Eripe_ChamskieRzeczy: AlbumType = {
    id: '77458697xs',
    author: 'Eripe',
    desc: 'Lorem desvc',
    date: 2012,
    image,
    informations: [],
    likes: Eripe_ChamskieRzeczy_Tracks.reduce((p, c) => p + c.likes, 0),
    name: 'Chamskie Rzeczy',
    tracks: Eripe_ChamskieRzeczy_Tracks,
    views: Eripe_ChamskieRzeczy_Tracks.reduce((p, c) => p + c.views, 0),
    comments: getRandomComments()
}


export default Eripe_ChamskieRzeczy