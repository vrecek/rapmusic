import { AlbumType } from "../../../interfaces/AlbumType";
import { getRandomComments } from "../../../util/CommentFunctions";
import image from '../../../images/Albums/Eripe/Opium/Opium.jpg'
import Eripe_Opium_Tracks from "../../Tracks/Eripe/Opium/Eripe_Opium_Tracks";


const Eripe_Opium: AlbumType = {
    id: 'polgkidjf7',
    author: 'Eripe',
    desc: 'Lorem desvc',
    date: 2015,
    image,
    informations: [],
    likes: Eripe_Opium_Tracks.reduce((p, c) => p + c.likes, 0),
    name: 'Opium',
    tracks: Eripe_Opium_Tracks,
    views: Eripe_Opium_Tracks.reduce((p, c) => p + c.views, 0),
    comments: getRandomComments()
}


export default Eripe_Opium