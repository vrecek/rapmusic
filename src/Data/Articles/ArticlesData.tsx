import { ArticleType } from "../../interfaces/ArticleInterfaces";
import {getRandomComments} from "../../util/CommentFunctions";
import b1 from '../../images/Articles/b1.jpg'
import b2 from '../../images/Articles/b2.jpg'
import b3 from '../../images/Articles/b3.jpg'
import b4 from '../../images/Articles/b4.jpg'
import b5 from '../../images/Articles/b5.jpg'
import b6 from '../../images/Articles/b6.jpg'


const ArticlesData: ArticleType[] = [
    {
        id: 'skbjfu893k',
        title: 'Praesent ultrices rutrum vulputate ante',
        text: 'Ut purus magna, lacinia quis sodales vitae, vehicula vitae ligula. Suspendisse finibus lobortis odio, sit amet ullamcorper metus venenatis eu. Aliquam ornare leo est. Aliquam vehicula malesuada tincidunt.',
        image: b1,
        category: 'News',
        tags: ['Accident', 'Music'],
        likes: 2112,
        dislikes: 329,
        views: 14323,
        comments: getRandomComments(),
        date: 'A week ago'
    },

    {
        id: 'p04cow8fhh',
        title: 'Fusce fermentum turpis sit amet massa rhoncus',
        text: 'Vivamus quis sem id metus sagittis egestas vel eu nisl. Sed viverra leo justo, imperdiet congue tellus interdum vel eleifend libero pharetra, varius turpis. ',
        image: b2,
        category: 'News',
        tags: ['Drama', 'Music'],
        likes: 599,
        dislikes: 31,
        views: 2188,
        comments: getRandomComments(),
        date: 'Yesterday'
    },

    {
        id: 'znv73nv9kf',
        title: 'Phasellus porttitor posuere venenatis maecenas lorem nisi',
        text: 'Mauris sollicitudin turpis eu consectetur rhoncus. Vivamus nec bibendum odio. Donec leo arcu, sollicitudin sed lorem a, lobortis vehicula dolor lobortis odio, sit amet ullamcorper metus venenatis eu',
        image: b3,
        category: 'Tips',
        tags: ['Beats', 'Music'],
        likes: 1742,
        dislikes: 186,
        views: 6894,
        comments: getRandomComments(),
        date: '3 days ago'
    },

    {
        id: 'pp04kvns77',
        title: 'Curabitur congue elit et eros congue',
        text: 'Pellentesque blandit lacus vel volutpat congue. Nam ut nibh at dui fringilla maximus. Phasellus semper tellus libero, in convallis eros luctus ut orci luctus et ultrices posuere cubilia curae',
        image: b4,
        category: 'Tips',
        tags: ['Beats', 'Creativity'],
        likes: 1974,
        dislikes: 195,
        views: 7321,
        comments: getRandomComments(),
        date: '5 days ago'
    },

    {
        id: 'a871mc990s',
        title: 'Cras finibus mattis elit sit amet suscipit leo tempor',
        text: 'Nam et convallis lacus. Integer purus orci, aliquet ac laoreet ac, blandit sit amet quam. Vestibulum vitae tellus vitae augue vestibulum facilisis. Nunc venenatis tortor sed quam aliquam aenean sed venenatis nisi. Donec auctor lorem arcu, sed ultricies',
        image: b5,
        category: 'Learning',
        tags: ['Beats', 'Creativity'],
        likes: 1567,
        dislikes: 96,
        views: 6231,
        comments: getRandomComments(),
        date: '4 days ago'
    },

    {
        id: 'pplc93jg7b',
        title: 'Praesent consectetur pulvinar neque non iaculis',
        text: 'Quisque eu posuere nisi. Vestibulum semper odio tortor, et consequat lacus facilisis vestibulum. Fusce viverra, ex quis ultricies egestas, dolor eros aliquam augue, vel auctor lectus ex vel tellus. Integer laoreet nisi vel mi dapibus bibendum risus pretium ut. Aliquam et mauris',
        image: b6,
        category: 'News',
        tags: ['Debut', 'Music'],
        likes: 962,
        dislikes: 23,
        views: 2212,
        comments: getRandomComments(),
        date: 'Yesterday'
    }
]

export default ArticlesData