import AllAuthors from "../Data/Authors/AllAuthors";
import ALL_TRACKS from "../Data/Tracks/AllTracks";
import { ArtistType } from "../interfaces/ArtistType";
import { TrackRelated } from "../interfaces/TrackPageInterfaces";
import { TrackType } from "../interfaces/TrackType";
import Client from "./Client";



const getOneTrack = (id: string): TrackType | null => ALL_TRACKS.filter(x => x.id === id)?.[0] ?? null

const getRandomTracks = (amount: number): TrackType[] => Client.shuffleArray(ALL_TRACKS).slice(0, amount)

const getRelatedTracks = (author: string, trackId: string): TrackRelated[] => {
    const artist: ArtistType = AllAuthors.filter(x => x.name === author)[0],
          tracks: TrackRelated[] = artist.albums.map(x => x.tracks.map(y => {
            return {
                name: y.name,
                id: y.id
            }
          })).flat()
             .filter(x => x.id !== trackId)
             

    return Client.shuffleArray(tracks).slice(0, 6)
}

export {
    getOneTrack,
    getRandomTracks,
    getRelatedTracks
}