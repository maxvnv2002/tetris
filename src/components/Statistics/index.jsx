import React from 'react';
import classes from './Statistics.module.scss'
import {useSelector} from "react-redux";

const Statistics = () => {
    const {score, lines, level} = useSelector(state => state)

    return (
        <div className={classes.statistics}>
            <p>Score: <span>{score}</span></p>
            <p>Lines: <span>{lines}</span></p>
            <p>Level: <span>{level}</span></p>
        </div>
    );
};

export default Statistics;