import { AlbumType } from "../../../interfaces/AlbumType";
import { getRandomComments } from "../../../util/CommentFunctions";
import image from '../../../images/Albums/Slon/Demonologia1/Demonologia1.jpg'
import Slon_Demonologia1_Tracks from "../../Tracks/Slon/Demonologia1/Slon_Demonologia1_Tracks";
import { getAlbumLength } from "../../../util/AlbumFunctions";


const Slon_Demonologia1: AlbumType = {
    id: 'vnbchuxqqa',
    author: 'Słoń',
    desc: `The first studio album of the duo Słoń and Mixer. The album was released on September 24, 2010 by the music label called 'Unhuman'.

    Guest was the vocalist of the band Turbo - Tomasz Struszczyk as well as rappers Pih, Koni, Shellerini, Kajman and Mrokas.`,
    date: 2010,
    image,
    informations: [
        { what: 'Published', value: '24 Sep 2010' },
        { what: 'Length', value: getAlbumLength(Slon_Demonologia1_Tracks) },
        { what: 'Total tracks', value: Slon_Demonologia1_Tracks.length },
        { what: 'Publisher', value: 'Unhuman' },
        { what: 'Record producers', value: 'Mikser' }
    ],
    likes: Slon_Demonologia1_Tracks.reduce((p, c) => p + c.likes, 0),
    name: 'Demonologia',
    tracks: Slon_Demonologia1_Tracks,
    views: Slon_Demonologia1_Tracks.reduce((p, c) => p + c.views, 0),
    comments: getRandomComments()
}


export default Slon_Demonologia1