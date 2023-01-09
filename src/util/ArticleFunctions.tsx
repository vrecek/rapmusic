import ArticlesData from "../Data/Articles/ArticlesData";
import { ArticleType } from "../interfaces/ArticleInterfaces";
import Client from "./Client";


const getRandomArticle = (): ArticleType => Client.shuffleArray<ArticleType>(ArticlesData)[0]

const getOneArticle = (id: string): ArticleType | null => ArticlesData.filter(x => x.id === id)?.[0] ?? null 


export {
    getRandomArticle,
    getOneArticle
}