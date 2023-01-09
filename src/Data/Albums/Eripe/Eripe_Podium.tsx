import { AlbumType } from "../../../interfaces/AlbumType";
import { getRandomComments } from "../../../util/CommentFunctions";
import Eripe_Podium_Tracks from "../../Tracks/Eripe/Podium/Eripe_Podium_Tracks";
import podium from '../../../images/Albums/Eripe/Podium/Podium.jpg'


const Eripe_Podium: AlbumType = {
    id: 'mbol995kff',
    author: 'Eripe',
    desc: 'Lorem desvc',
    date: 2016,
    image: podium,
    informations: [],
    likes: Eripe_Podium_Tracks.reduce((p, c) => p + c.likes, 0),
    name: 'Podium',
    tracks: Eripe_Podium_Tracks,
    views: Eripe_Podium_Tracks.reduce((p, c) => p + c.views, 0),
    comments: getRandomComments()
}


export default Eripe_Podium