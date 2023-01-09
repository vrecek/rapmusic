import { TrackType } from "../../interfaces/TrackType";
import Eripe_ChamskieRzeczy_Tracks from "./Eripe/ChamskieRzeczy/Eripe_ChamskieRzeczy_Tracks";
import Eripe_Odium_Tracks from "./Eripe/Odium/Eripe_Odium_Tracks";
import Eripe_Opium_Tracks from "./Eripe/Opium/Eripe_Opium_Tracks";
import Eripe_Podium_Tracks from "./Eripe/Podium/Eripe_Podium_Tracks";
import Golin_Katakumby_Tracks from "./Golin/Katakumby/Golin_Katakumby_Tracks";
import Slon_ChoreMelodie_Tracks from "./Slon/ChoreMelodie/Slon_ChoreMelodie_Tracks";
import Slon_Demonologia1_Tracks from "./Slon/Demonologia1/Slon_Demonologia1_Tracks";


const ALL_TRACKS: TrackType[] = [
    ...Eripe_Podium_Tracks,
    ...Eripe_Odium_Tracks,
    ...Eripe_Opium_Tracks,
    ...Eripe_ChamskieRzeczy_Tracks,
    ...Slon_ChoreMelodie_Tracks,
    ...Slon_Demonologia1_Tracks,
    ...Golin_Katakumby_Tracks
]


export default ALL_TRACKS