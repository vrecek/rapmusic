import { AlbumType } from "../../../interfaces/AlbumType";
import { getRandomComments } from "../../../util/CommentFunctions";
import image from '../../../images/Albums/Eripe/Opium/Opium.jpg'
import Eripe_Opium_Tracks from "../../Tracks/Eripe/Opium/Eripe_Opium_Tracks";
import { getAlbumLength } from "../../../util/AlbumFunctions";


const Eripe_Opium: AlbumType = {
    id: 'polgkidjf7',
    author: 'Eripe',
    desc: `Opium is a bragg that mixes with a hard worldview, bitter reflections and good fun. The whole thing is seasoned with an exaggerated level of technique and rhymes as well as unconventional productions, which makes the album leave absolutely no one indifferent.`,
    date: 2015,
    image,
    informations: [
        { what: 'Published', value: '2015' },
        { what: 'Length', value: getAlbumLength(Eripe_Opium_Tracks) },
        { what: 'Total tracks', value: Eripe_Opium_Tracks.length },
        { what: 'Publisher', value: 'ILL MINDZ' },
        { what: 'Record producers', value: 'TMK Beatz, Mario Kontrargument, Ksywabezdja, NoTime, Eigus, Jhn, Lanek, Nastyk, Mihtal' }
    ],
    likes: Eripe_Opium_Tracks.reduce((p, c) => p + c.likes, 0),
    name: 'Opium',
    tracks: Eripe_Opium_Tracks,
    views: Eripe_Opium_Tracks.reduce((p, c) => p + c.views, 0),
    comments: getRandomComments()
}


export default Eripe_Opium