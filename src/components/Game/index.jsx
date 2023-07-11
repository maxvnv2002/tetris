import React, {useEffect} from 'react';
import GameOver from "../GameOver";
import classes from "./GamePage.module.scss";
import Statistics from "../Statistics";
import Board from "../Board";
import NextPiece from "../NextPiece";
import PauseMenu from "../PauseMenu";
import {useSelector} from "react-redux";
import store from "../../store";
import * as settingsActions from "../../store/actions/settingsActions";
import ProgressGroup from "../ProgressGroup";
import Popup from "../Popup";


const Game = () => {
    const isGameOver = useSelector(state => state.game.isGameOver)
    const isSettingsShowed = useSelector(state => state.settings.isSettingsShowed)
    const isLeaderBoardShowed = useSelector(state => state.settings.isLeaderBoardShowed)
    const isAnyPopupShowed = isLeaderBoardShowed || isSettingsShowed

    const gamePauseHandler = () => {
        store.dispatch({type: settingsActions.showPopup, payload: {isSettingsShowed: true}})
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
                            !isAnyPopupShowed && <Board/>
                        }
                        <NextPiece/>
                    </div>
            }
            {
                isSettingsShowed && (
                    <Popup title={'Settings'} anotherButton={<PauseMenu/>}>
                        <ProgressGroup/>
                    </Popup>
                )
            }
        </div>
    );
};

export default Game;