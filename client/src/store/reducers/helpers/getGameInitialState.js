import {figuresForms} from "../../../constants/figuresInfo/figuresInfo";
import {getRandomFigure} from "./getRandomFigure";

export const getInitialState = () => {
    const initialState = {
        score: 0,
        lines: 0,
        level: 1,
        playField: new Array(20).fill(0).map(arr => new Array(10).fill(0)),
        activePiece: {
            x: 3,
            y: -1,
            figure: getRandomFigure(),
            rotationIndex: 0
        },
        nextPiece: getRandomFigure(),
        isGameOver: false,
        isGamePaused: false
    }

    return initialState
}
