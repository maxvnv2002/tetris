import { combineReducers, createStore } from 'redux';
import {gameReducer} from "./reducers/gameReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import settingsReducer from "./reducers/settingsReducer";

const rootReducer = combineReducers({game: gameReducer, settings: settingsReducer})

const store = createStore(rootReducer, composeWithDevTools());

export default store;