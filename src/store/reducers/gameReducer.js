import {getInitialState} from "./initialState";
import * as actions from '../actionTypes'
import {figuresForms} from "../../constants/figuresInfo";
import {getRandomFigure} from "../../functions/getRandomFigure";
import {points} from "../../constants/points";


export function gameReducer(state = getInitialState(), action) {
    let { x: pieceX , y: pieceY, figure } = state.activePiece
    switch(action.type) {
        case actions.pieceMoveLeft:
            pieceX -= 1
            if (hasCollision(pieceX, pieceY, figure.blocks, state.playField)) {
                pieceX += 1
            }

            return {
                ...state,
                activePiece: {
                    ...state.activePiece,
                    x: pieceX
                }
            }
        case actions.pieceMoveRight:
            pieceX += 1
            if (hasCollision(pieceX, pieceY, figure.blocks, state.playField)) {
                pieceX -= 1
            }

            return {
                ...state,
                activePiece: {
                    ...state.activePiece,
                    x: pieceX
                }
            }
        case actions.pieceMoveDown:
            pieceY += 1
            if (hasCollision(pieceX, pieceY, figure.blocks, state.playField)) {
                pieceY -= 1

                for (let y = 0; y < figure.blocks.length; y++) {
                    for (let x = 0; x < figure.blocks[y].length; x++) {
                        if (figure.blocks[y][x] && state.playField[pieceY + y][pieceX + x]) {
                            return {
                                ...state,
                                isGameOver: true
                            }
                        }
                    }
                }
                let tempField = lockPiece(pieceX, pieceY, figure.blocks, state.playField)
                const nextPieceY = state.nextPiece.name === 'I' ? -2 : -1
                const nextPieceX = Math.floor(5 - state.nextPiece.blocks.length / 2)

                if (hasCollision(nextPieceX, nextPieceY, state.nextPiece.blocks, tempField)) {
                    return {...state, isGameOver: true}
                }

                return  {
                    ...state,
                    ...clearLines(tempField, state.score, state.lines),
                    activePiece: {
                        ...state.activePiece,
                        y: nextPieceY,
                        x: nextPieceX,
                        figure: state.nextPiece
                    },
                    nextPiece: getRandomFigure()
                }
            }
            return  {
                ...state,
                activePiece: {
                    ...state.activePiece,
                    y: pieceY
                },
            }
        case actions.pieceRotate:
            const figureName = state.activePiece.figure.name
            const rotationIndex = state.activePiece.rotationIndex
            const nextRotationIndex = (rotationIndex + 1) % figuresForms[figureName].length

            if (hasCollision(pieceX, pieceY, figuresForms[figureName][nextRotationIndex], state.playField)) {
                return state
            }

            return  {
                ...state,
                activePiece: {
                    ...state.activePiece,
                    rotationIndex: nextRotationIndex,
                    figure: {
                        blocks: figuresForms[figureName][nextRotationIndex],
                        name: figureName
                    }
                }
            }
        case actions.resetGame:
            return getInitialState()
        default: return state;
    }
}

function lockPiece (pieceX, pieceY, blocks, playField) {
    const tempField = [...playField]

    for (let y = 0; y < blocks.length; y++) {
        for (let x = 0; x < blocks[y].length; x++) {
            if (blocks[y][x]) {
                tempField[pieceY + y][pieceX + x] = blocks[y][x]
            }
        }
    }
    return tempField
}
function hasCollision (pieceX, pieceY, blocks, playField) {
    for (let y = 0; y < blocks.length; y++) {
        for (let x = 0; x < blocks[y].length; x++) {
            if (
                blocks[y][x] &&
                (
                    (playField[pieceY + y] === undefined || playField[pieceY + y][pieceX + x] === undefined) ||
                    playField[pieceY + y][pieceX + x]
                )
            ) {
                return true
            }
        }
    }
    return false
}
function clearLines (playField, score, lines) {
    const linesToClear = []
    for (let y = playField.length - 1; y >= 0; y--) {
        const isRowCompleted = playField[y].every(cell => !!cell)
        if (isRowCompleted) {
            linesToClear.unshift(y)
        }
    }
    console.log(linesToClear)
    for (let line of linesToClear) {
        console.log(line)
        playField.splice(line, 1)
        playField.unshift(new Array(10).fill(0,0))
    }

    return {playField: playField, ...updateScore(score, lines, linesToClear)}
}

function updateScore (prevScore, prevLines, linesToClear) {
    const newLevel  = Math.ceil((prevLines + linesToClear.length) / 10)
    return {
        score: prevScore += points[linesToClear.length],
        lines: prevLines += linesToClear.length,
        level: newLevel ? newLevel : 1
    }
}