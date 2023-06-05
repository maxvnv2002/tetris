import React from 'react';
import Statistics from "../Statistics";
import classes from './GameOver.module.scss'
import store from "../../store";
import * as actions from '../../store/actionTypes'
const GameOver = () => {
    const resetHandler = () => {
        store.dispatch({type: actions.resetGame})
    }


    return (
        <div className={classes.gameOver}>
            <p className={classes.title}>Game Over!</p>
            <Statistics/>
            <button onClick={resetHandler}>Reset</button>
        </div>
    );
};

export default GameOver;