import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Button from "./components/SmallButton";
import MainPage from "./pages/MainPage";
import GamePage from "./pages/GamePage";
import MainMenu from "./components/MainMenu";
function App() {

    return (
        <div className="App">
            <Routes>
                <Route path='/tetris' element={ <MainPage/> }>
                    <Route path='/tetris' element={<MainMenu/>}/>
                    <Route path='game' element={<GamePage/>} />
                    <Route path='*' element={ <h1>Not found</h1> }/>
                </Route>

            </Routes>
        </div>
    );
}

export default App;
