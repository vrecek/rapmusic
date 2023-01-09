import Comments from "../Data/Comments/Comments";
import { CommentType } from "../interfaces/CommonInterfaces";
import Client from "./Client";


const getRandomComments = (): CommentType[] => {
    return Client.shuffleArray<CommentType>(
        Client.getRandomItemsFromArray<CommentType>(Comments)
    )
}

const getComments = (): CommentType[] => Client.shuffleArray<CommentType>(Comments)


export {
    getRandomComments,
    getComments
}