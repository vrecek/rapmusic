import { AlbumType } from "../../../interfaces/AlbumType";
import { getRandomComments } from "../../../util/CommentFunctions";
import image from '../../../images/Albums/Eripe/Odium/Odium.jpg'
import Eripe_Odium_Tracks from "../../Tracks/Eripe/Odium/Eripe_Odium_Tracks";
import { getAlbumLength } from "../../../util/AlbumFunctions";


const Eripe_Odium: AlbumType = {
    id: 'cv94v771vc',
    author: 'Eripe',
    desc: `Odium is a very good album. Both the producers and the main character showed class, and the only thing anyone could complain about are expressive views`,
    date: 2012,
    image,
    informations: [
        { what: 'Published', value: '2012' },
        { what: 'Length', value: getAlbumLength(Eripe_Odium_Tracks) },
        { what: 'Total tracks', value: Eripe_Odium_Tracks.length },
        { what: 'Publisher', value: 'ILL MINDZ' },
        { what: 'Record producers', value: 'Ksywabezdja, Nastyk, Jan Taxky' }
    ],
    likes: Eripe_Odium_Tracks.reduce((p, c) => p + c.likes, 0),
    name: 'Odium',
    tracks: Eripe_Odium_Tracks,
    views: Eripe_Odium_Tracks.reduce((p, c) => p + c.views, 0),
    comments: getRandomComments()
}


export default Eripe_Odium