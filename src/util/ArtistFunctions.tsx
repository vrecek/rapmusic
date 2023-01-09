import AllAlbums from "../Data/Albums/AllAlbums";
import AllAuthors from "../Data/Authors/AllAuthors";
import { ArtistType } from "../interfaces/ArtistType";
import Client from "../util/Client";

const getOneArtist = (name: string): ArtistType | null => AllAuthors.filter(x => x.name.toLowerCase() === name.toLowerCase())?.[0] ?? null

const getArtistStatistics = (artist: string, type: 'views' | 'likes'): number => {
    const artistAlbums = AllAlbums.filter(x => x.author === artist),
          numbers: number[] = artistAlbums.map(x => x.tracks.map(y => y[type])).flat()

    return numbers.reduce((p, c) => p + c)
}

const getRandomArtists = (amount: number): ArtistType[] => Client.shuffleArray(AllAuthors).slice(0, amount)

export {
    getOneArtist,
    getRandomArtists,
    getArtistStatistics
}