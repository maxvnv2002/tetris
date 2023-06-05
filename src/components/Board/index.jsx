import React, {useEffect, useRef, useState} from 'react';
import classes from '../Board/Board.module.scss'
import {colors} from "../../constants/colors";
import store from "../../store";
import * as actions from "../../store/actionTypes";
import {useSelector} from "react-redux";
import {getFramesByLevel} from "../../functions/getFramesByLevel";

const Board = ({playBoard}) => {
    const [ intervalId, setIntervalId ] = useState(null)
    const {level} = useSelector(state => state)
    const framesByLevel = getFramesByLevel(level) / 60  * 1000
    useEffect(() => {
        document.addEventListener('keydown', keyDownHandler);

        const interval = setInterval(() => {
            store.dispatch({type: actions.pieceMoveDown})
        }, framesByLevel)
        setIntervalId(interval)

        return () => {
            document.removeEventListener('keydown', keyDownHandler)

            clearInterval(interval)
            setIntervalId(null)
        }
    }, [])

    const keyDownHandler = (event) => {
        switch (event.key) {
            case 'ArrowLeft':
                store.dispatch({type: actions.pieceMoveLeft})
                break;
            case 'ArrowUp':
                store.dispatch({type: actions.pieceRotate})
                break;
            case 'ArrowRight':
                store.dispatch({type: actions.pieceMoveRight})
                break;
            case 'ArrowDown':
                store.dispatch({type: actions.pieceMoveDown})
                break;
        }
    }

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
        </div>
    );
};

export default Board;