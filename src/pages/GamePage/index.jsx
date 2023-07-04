import React, {useEffect} from 'react';
import GameOver from "../../components/GameOver";
import classes from "./GamePage.module.scss";
import Statistics from "../../components/Statistics";
import Board from "../../components/Board";
import NextPiece from "../../components/NextPiece";
import PauseMenu from "../../components/PauseMenu";
import {useSelector} from "react-redux";
import store from "../../store";
import * as settingsActions from "../../store/actions/settingsActions";
import SettingsPopup from "../../components/SettingsPopup";


const GamePage = () => {
    const isGameOver = useSelector(state => state.game.isGameOver)
    const isSettingsShowed = useSelector(state => state.settings.isSettingsShowed)
    const gamePauseHandler = () => {
        store.dispatch({type: settingsActions.showSettings})
    }
    const ecsKeyHandler = (event) => {
        if (event.key === 'Escape') {
            gamePauseHandler()
        }
    }
    useEffect(() => {
        document.addEventListener('keydown', ecsKeyHandler);
        return () => {
            document.removeEventListener('keydown', ecsKeyHandler)
        }
    }, [])


    return (
        <div className='container'>
            {
                isGameOver ? <GameOver/>
                    :
                    <div className={classes.game}>
                        <Statistics/>
                        {
                            !isSettingsShowed && <Board/>
                        }
                        <NextPiece/>
                    </div>
            }
            {
                isSettingsShowed && (
                    <SettingsPopup title={ 'Pause' }>
                        <PauseMenu/>
                    </SettingsPopup>
                )
            }
        </div>
    );
};

export default GamePage;