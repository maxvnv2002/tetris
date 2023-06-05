import {applyMiddleware, createStore} from 'redux';
import {gameReducer} from "./reducers/gameReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(gameReducer, composeWithDevTools());

export default store;