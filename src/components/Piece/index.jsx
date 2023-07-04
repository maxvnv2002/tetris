import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {colors} from "../../constants/colors";
import variables from '../../variables/breakpoints.scss';
import classes from './Piece.module.scss'
import {getFramesByLevel} from "../../functions/getFramesByLevel";
import store from "../../store";
import * as actions from "../../store/actions/gameActions";
import {keyDownHandler} from "../../functions/keyDownHandler";

const Piece = () => {
    const {x: pieceX, y: pieceY, figure} = useSelector(state => state.game.activePiece);
    const figureHeight = figure.blocks.length;
    const figureWidth = figure.blocks[0].length;

    const positionStyles = {
        'width': `calc(${variables.boxWidth} * ${figureWidth})`,
        'height': `calc(${variables.boxWidth} * ${figureHeight})`,
        'top': `calc(${variables.boxWidth} * ${pieceY})`,
        'left': `calc(${variables.boxWidth} * ${pieceX})`,
    }

    const [ intervalId, setIntervalId ] = useState(null)
    const {level} = useSelector(state => state.game)

    useEffect(() => {
        document.addEventListener('keydown', keyDownHandler);
        const interval = setInterval(() => {
            store.dispatch({type: actions.pieceMoveDown})
        },
            getFramesByLevel(level)
        )
        setIntervalId(interval)
        return () => {
            document.removeEventListener('keydown', keyDownHandler)
            clearInterval(interval)
            setIntervalId(null)
        }
    }, [getFramesByLevel(level)])

    return (
        <div
            className={classes.piece}
            style={{...positionStyles}}
        >
            { figure.blocks.map((row, rowIndex) => {
                return row.map((cell, cellIndex) => {
                    return (
                        <div
                            key={`${rowIndex}.${cellIndex}`}
                            style={{
                                background: colors[cell - 1],
                        }}
                            className={cell ? 'box' : `${classes.empty} box`}
                        ></div>
                    )
                })
            }) }
        </div>
    );
};

export default Piece;