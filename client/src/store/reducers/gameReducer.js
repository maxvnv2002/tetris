import {getInitialState} from "./helpers/getGameInitialState";
import * as actions from '../actions/gameActions'
import {figuresForms} from "../../constants/figuresInfo/figuresInfo";
import {getRandomFigure} from "./helpers/getRandomFigure";
import {points} from "../../constants/points";


export function gameReducer(state = getInitialState(), action) {
    let { x: pieceX , y: pieceY, figure } = state.activePiece
    switch(action.type) {
        // Движение фигуры влево
        case actions.pieceMoveLeft:
            // Уменьшение значения X-координаты на 1
            pieceX -= 1
            // Проверка на стокновение
            if (hasCollision(pieceX, pieceY, figure.blocks, state.playField)) {
                // Если есть столкновение, возвращем значение X-координанты обратно
                pieceX += 1
            }

            return {
                ...state,
                activePiece: {
                    ...state.activePiece,
                    x: pieceX
                }
            }
        // Движение фигуры вправо
        case actions.pieceMoveRight:
            // Увелечение значения X-координаты на 1
            pieceX += 1
            // Проверка на стокновение
            if (hasCollision(pieceX, pieceY, figure.blocks, state.playField)) {
                // Если есть столкновение, возвращем значение X-координанты обратно
                pieceX -= 1
            }

            return {
                ...state,
                activePiece: {
                    ...state.activePiece,
                    x: pieceX
                }
            }
        // Движение фигуры вниз
        case actions.pieceMoveDown:
            // Увелечение значения Y-координаты на 1
            pieceY += 1
            // Проверка на столкновение
            if (hasCollision(pieceX, pieceY, figure.blocks, state.playField)) {
                // Если есть столкновение, возвращем значение Y-координанты обратно
                pieceY -= 1

                // for (let y = 0; y < figure.blocks.length; y++) {
                //     for (let x = 0; x < figure.blocks[y].length; x++) {
                //         if (figure.blocks[y][x] && state.playField[pieceY + y][pieceX + x]) {
                //             return {
                //                 ...state,
                //                 isGameOver: true
                //             }
                //         }
                //     }
                // }

                // Временное игровое поле с заблокированной на нем фигуре (т.к. было столкновение)
                let tempField = lockPiece(pieceX, pieceY, figure.blocks, state.playField)
                // Начальная Y-координата следующей фигуры
                const nextPieceY = state.nextPiece.name === 'I' ? -2 : -1
                // Начальная X-координата следующей фигуры
                const nextPieceX = Math.floor(5 - state.nextPiece.blocks.length / 2)
                // Проверка на столкновение следующей фигуры
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
        // Вращение фигуры
        case actions.pieceRotate:
            // Получение названия активной фигуры
            const figureName = state.activePiece.figure.name
            const rotationIndex = state.activePiece.rotationIndex
            // Получение индекса ротации активной фигуры
            const nextRotationIndex = (rotationIndex + 1) % figuresForms[figureName].length
            // Проверка на столкновение при вращениеи
            if (hasCollision(pieceX, pieceY, figuresForms[figureName][nextRotationIndex], state.playField)) {
                // Если есть столкновение, то фигуру не вращаем
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
    for (let line of linesToClear) {
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