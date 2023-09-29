import React from 'react';
import Statistics from "../Statistics";
import classes from './GameOver.module.scss'
import store from "../../store";
import * as gameActions from '../../store/actions/gameActions'
import SmallButton from "../../UIKit/SmallButton";
import {icons} from "../../constants/icons";
const GameOver = () => {
    const resetHandler = () => {
        store.dispatch({type: gameActions.resetGame})
    }


    return (
        <div className={classes.gameOver}>
            <p className={classes.title}>
                Game
                <span className={classes.spanPurple}>Over</span>
                <span className={classes.spanBlink}>!</span>
            </p>
            <Statistics/>
            <SmallButton onClick={resetHandler} image={icons.restart}/>
        </div>
    );
};

export default GameOver;