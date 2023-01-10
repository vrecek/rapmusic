import { AlbumType } from "../../../interfaces/AlbumType";
import { getRandomComments } from "../../../util/CommentFunctions";
import image from '../../../images/Albums/Golin/Katakumby/Katakumby.jpg'
import Golin_Katakumby_Tracks from "../../Tracks/Golin/Katakumby/Golin_Katakumby_Tracks";
import { getAlbumLength } from "../../../util/AlbumFunctions";


const Golin_Katakumby: AlbumType = {
    id: '09oiiii8uh',
    author: 'Golin',
    desc: `Tracks, in addition to excellent lines, have memorable punchlines and brilliant word combinations. This album is full of thoughts and reflections. 
    
    Golin has strong, subjective views, but he does not present them as revealed truth. It is rather a discussion with the listener who thinks about what he heard, just to understand these words in his own way.`,
    date: 2012,
    image,
    informations: [
        { what: 'Published', value: 'December 2012' },
        { what: 'Length', value: getAlbumLength(Golin_Katakumby_Tracks) },
        { what: 'Total tracks', value: Golin_Katakumby_Tracks.length },
        { what: 'Publisher', value: 'Unkown' },
        { what: 'Record producers', value: 'Szpalowsky, Wallcut' }
    ],
    likes: Golin_Katakumby_Tracks.reduce((p, c) => p + c.likes, 0),
    name: 'Katakumby',
    tracks: Golin_Katakumby_Tracks,
    views: Golin_Katakumby_Tracks.reduce((p, c) => p + c.views, 0),
    comments: getRandomComments()
}


export default Golin_Katakumby