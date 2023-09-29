import store from "../../../store";
import * as actions from "../../../store/actions/gameActions";

export const keyDownHandler = (event) => {
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