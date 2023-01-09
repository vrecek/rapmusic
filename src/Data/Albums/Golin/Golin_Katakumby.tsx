import { AlbumType } from "../../../interfaces/AlbumType";
import { getRandomComments } from "../../../util/CommentFunctions";
import image from '../../../images/Albums/Golin/Katakumby/Katakumby.jpg'
import Golin_Katakumby_Tracks from "../../Tracks/Golin/Katakumby/Golin_Katakumby_Tracks";


const Golin_Katakumby: AlbumType = {
    id: '09oiiii8uh',
    author: 'Golin',
    desc: 'Lorem desvc',
    date: 2012,
    image,
    informations: [
        { what: 'Dolore', value: '202' },
        { what: 'Dolore', value: '202' },
        { what: 'Dolore', value: '202' },
        { what: 'Dolore', value: '202' }
    ],
    likes: Golin_Katakumby_Tracks.reduce((p, c) => p + c.likes, 0),
    name: 'Katakumby',
    tracks: Golin_Katakumby_Tracks,
    views: Golin_Katakumby_Tracks.reduce((p, c) => p + c.views, 0),
    comments: getRandomComments()
}


export default Golin_Katakumby