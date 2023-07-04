import React, {memo} from 'react';
import classes from './Statistics.module.scss'
import {useSelector} from "react-redux";

const Statistics = () => {
    const score = useSelector(state => state.game.score);
    const lines = useSelector(state => state.game.lines);
    const level = useSelector(state => state.game.level);

    return (
        <div className={classes.statistics}>
            <p>Score: <span>{score}</span></p>
            <p>Lines: <span>{lines}</span></p>
            <p>Level: <span>{level}</span></p>
        </div>
    );
};

export default Statistics;