import { AlbumType } from "../../../interfaces/AlbumType";
import { getRandomComments } from "../../../util/CommentFunctions";
import Eripe_Podium_Tracks from "../../Tracks/Eripe/Podium/Eripe_Podium_Tracks";
import podium from '../../../images/Albums/Eripe/Podium/Podium.jpg'
import { getAlbumLength } from "../../../util/AlbumFunctions";


const Eripe_Podium: AlbumType = {
    id: 'mbol995kff',
    author: 'Eripe',
    desc: `The last part of the Eripe's trilogy, which is a kind of closure and summary of the first 4 years of the rapper's activity. It is a mixture of elements recognizable for the Eripe's style; honest, blunt lines with strong punchlines and demanding and artfully complex lines  with characteristic charisma and self-confidence.`,
    date: 2016,
    image: podium,
    informations: [
        { what: 'Published', value: 'December 2016' },
        { what: 'Length', value: getAlbumLength(Eripe_Podium_Tracks) },
        { what: 'Total tracks', value: Eripe_Podium_Tracks.length },
        { what: 'Publisher', value: 'ILL MINDZ' },
        { what: 'Record producers', value: 'TMK Beatz, Mario Kontrargument, NoTime, Nastyk' }
    ],
    likes: Eripe_Podium_Tracks.reduce((p, c) => p + c.likes, 0),
    name: 'Podium',
    tracks: Eripe_Podium_Tracks,
    views: Eripe_Podium_Tracks.reduce((p, c) => p + c.views, 0),
    comments: getRandomComments()
}


export default Eripe_Podium