import { AlbumType } from "../../../interfaces/AlbumType";
import { getRandomComments } from "../../../util/CommentFunctions";
import image from '../../../images/Albums/Eripe/ChamskieRzeczy/ChamskieRzeczy.jpg'
import Eripe_ChamskieRzeczy_Tracks from "../../Tracks/Eripe/ChamskieRzeczy/Eripe_ChamskieRzeczy_Tracks";
import { getAlbumLength } from "../../../util/AlbumFunctions";


const Eripe_ChamskieRzeczy: AlbumType = {
    id: '77458697xs',
    author: 'Eripe',
    desc: `An underground debut that was very well received by the listeners, and many people in the industry that recognized the talent of the Krakow rapper.
    
    He came out of nowhere, without any announcement. From day to day, the album was spreading among people, without any special promotion or support from larger people, which shows that a good album could defend itself, despite the competition, which in 2012 was very big`,
    date: 2012,
    image,
    informations: [
        { what: 'Published', value: '2012' },
        { what: 'Length', value: getAlbumLength(Eripe_ChamskieRzeczy_Tracks) },
        { what: 'Total tracks', value: Eripe_ChamskieRzeczy_Tracks.length },
        { what: 'Publisher', value: 'Unkown' },
        { what: 'Record producers', value: 'Unkown' }
    ],
    likes: Eripe_ChamskieRzeczy_Tracks.reduce((p, c) => p + c.likes, 0),
    name: 'Chamskie Rzeczy',
    tracks: Eripe_ChamskieRzeczy_Tracks,
    views: Eripe_ChamskieRzeczy_Tracks.reduce((p, c) => p + c.views, 0),
    comments: getRandomComments()
}


export default Eripe_ChamskieRzeczy