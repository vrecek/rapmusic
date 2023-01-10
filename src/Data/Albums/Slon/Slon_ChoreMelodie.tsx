import { AlbumType } from "../../../interfaces/AlbumType";
import { getRandomComments } from "../../../util/CommentFunctions";
import image from '../../../images/Albums/Slon/ChoreMelodie/ChoreMelodie.jpg'
import Slon_ChoreMelodie_Tracks from "../../Tracks/Slon/ChoreMelodie/Slon_ChoreMelodie_Tracks";
import { getAlbumLength } from "../../../util/AlbumFunctions";


const Slon_ChoreMelodie: AlbumType = {
    id: 'vjgu88881q',
    author: 'Słoń',
    desc: `First solo album of Polish rapper Słoń. The album was released on May 15, 2009 by the music label called 'Unhuman'. 
    
    The album was preceded by the single released on March 12 of the same year entitled 'Krwawy aperitif'. The recordings were produced by Mikser, Loco HCM, Grant and Shileeth. Among the guests were Kaczor, Koni, Paluch and Shellerini.`,
    date: 2009,
    image,
    informations: [
        { what: 'Published', value: '15 May 2009' },
        { what: 'Length', value: getAlbumLength(Slon_ChoreMelodie_Tracks) },
        { what: 'Total tracks', value: Slon_ChoreMelodie_Tracks.length },
        { what: 'Publisher', value: 'Unhuman' },
        { what: 'Record producers', value: 'Mikser, Loco HCM, Grant, Shileeth' }
    ],
    likes: Slon_ChoreMelodie_Tracks.reduce((p, c) => p + c.likes, 0),
    name: 'Chore melodie',
    tracks: Slon_ChoreMelodie_Tracks,
    views: Slon_ChoreMelodie_Tracks.reduce((p, c) => p + c.views, 0),
    comments: getRandomComments()
}


export default Slon_ChoreMelodie