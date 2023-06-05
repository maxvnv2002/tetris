import React from 'react';
import classes from './Game.module.scss'
import Statistics from "../Statistics";
import Board from "../Board";
import NextPiece from "../NextPiece";
import {useSelector} from "react-redux";
import {getPlayField} from "../../functions/getPlayField";
import GameOver from "../GameOver";
const Came = () => {
    const playField = useSelector(state => state.playField)
    // activePiece's state
    const {x: pieceX, y: pieceY, figure} = useSelector(state => state.activePiece)
    const currentPlayField = getPlayField(playField, pieceX, pieceY, figure.blocks)

    const isGameOver = useSelector(state => state.isGameOver)

    return (
        <div className='container'>
            {
                isGameOver ? <GameOver/>
                    :
                    <div className={classes.game}>
                        <Statistics/>
                        <Board
                            playBoard={currentPlayField}
                            pieceX={pieceX}
                            pieceY={pieceY}
                            blocks={figure.blocks}
                        />
                        <NextPiece/>
                    </div>
            }
        </div>

    );
};

export default Came;