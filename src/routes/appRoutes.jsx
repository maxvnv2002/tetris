import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";
import MainMenu from "../components/MainMenu";
import GamePage from "../components/Game";

const appRoutes = () => {
    return (
        <Routes>
            <Route path='/tetris' element={ <MainPage/> }>
                <Route path='/tetris' element={<MainMenu/>}/>
                <Route path='game' element={<GamePage/>} />
                <Route path='*' element={ <h1>Not found</h1> }/>
            </Route>

        </Routes>
    );
};

export default appRoutes;