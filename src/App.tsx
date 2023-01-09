import './css/index.css'
import { HashRouter, Routes, Route } from 'react-router-dom' 
import HOMEPAGE from './components/Home/HOMEPAGE'
import TRACK from './components/Track/TRACK'
import ALBUM from './components/Album/ALBUM'
import LOGIN from './components/LoginRegister/Login/LOGIN'
import REGISTER from './components/LoginRegister/Register/REGISTER'
import SEARCH from './components/Search/SEARCH'
import ARTICLE from './components/Article/ARTICLE'
import AUTHOR from './components/Author/AUTHOR'


function App() {
    return (
        <div className="App">

            <HashRouter>

                <Routes>

                    <Route path='/' element={<HOMEPAGE />} />

                    <Route path='/track/:id' element={<TRACK />} />
                    <Route path='/album/:id' element={<ALBUM />} />
                    <Route path='/artist/:name' element={<AUTHOR />} />

                    <Route path='/sign-in' element={<LOGIN />} />
                    <Route path='/register' element={<REGISTER />} />

                    <Route path='/search/:type/:query' element={<SEARCH />} />

                    <Route path='/article/:id' element={<ARTICLE />} />

                </Routes>
                
            </HashRouter>

        </div>
    )
}

export default App
