import React from 'react';
import classes from '../Board/Board.module.scss'
import {colors} from "../../constants/colors";
import {useSelector} from "react-redux";
import Piece from "../Piece";

const Board = () => {
    const playBoard = useSelector(state => state.game.playField)

    return (
        <div className={classes.board}>
            {
                playBoard.map((row, rowIndex) => {
                    return row.map((cell, cellIndex) => (
                        <div className={'box'}
                             style={{background: cell ? colors[cell - 1] : ''}}
                             key={`${rowIndex}.${cellIndex}`}
                        ></div>
                    ))
                })
            }
            <Piece/>
        </div>
    );
};

export default Board;