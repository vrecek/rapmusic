import { AlbumType } from "../../../interfaces/AlbumType";
import { getRandomComments } from "../../../util/CommentFunctions";
import image from '../../../images/Albums/Eripe/Odium/Odium.jpg'
import Eripe_Odium_Tracks from "../../Tracks/Eripe/Odium/Eripe_Odium_Tracks";


const Eripe_Odium: AlbumType = {
    id: 'cv94v771vc',
    author: 'Eripe',
    desc: 'Lorem desvc',
    date: 2012,
    image,
    informations: [],
    likes: Eripe_Odium_Tracks.reduce((p, c) => p + c.likes, 0),
    name: 'Odium',
    tracks: Eripe_Odium_Tracks,
    views: Eripe_Odium_Tracks.reduce((p, c) => p + c.views, 0),
    comments: getRandomComments()
}


export default Eripe_Odium