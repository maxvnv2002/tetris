import React from 'react';
import {useSelector} from "react-redux";
import {colors} from "../../constants/colors";
import classes from "./NextPiece.module.scss";

const NextPiece = () => {
    const nextPiece = useSelector(state => state.game.nextPiece.blocks);
    const nextPieceArray = [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
    ];
    for (let y = 0; y < nextPiece.length; y++) {
        for (let x = 0; x < nextPiece[y].length; x++) {
            nextPieceArray[y][x] = nextPiece[y][x]
        }
    }
    return (
        <div className={classes.wrap}>
            <p>Next:</p>
            <div className={classes.grid}>
                {nextPieceArray.map((row, rowIndex) => {
                    return row.map((cell, cellIndex) => (
                        <div
                            key={`${rowIndex}.${cellIndex}`}
                            className={'box'}
                            style={{background: cell ? colors[cell - 1] : ""}}
                        >
                        </div>
                    ))
                })}
            </div>
        </div>
    );
};

export default NextPiece;