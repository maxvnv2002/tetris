import * as actions from '../actions/settingsActions'
import {updateAlert} from "../actions/settingsActions";

const initialState = {
    isGreeting: true,
    isSettingsShowed: false,
    musicVolume: 50,
    soundVolume: 50,
    alert: {
        text: 'Nickname cannot be empty',
        isShowed: false
    }
}

export default function settingsReducer(state = initialState, action) {
    switch (action.type) {
        case actions.stopGreeting:
            return {...state, isGreeting: false}
        case actions.showSettings:
            return {...state, isSettingsShowed: action.payload}
        case actions.updateMusicVolume:
            return {...state, musicVolume: action.payload}
        case actions.updateSoundVolume:
            return {...state, soundVolume: action.payload}
        case actions.updateAlert:
            return {
                ...state,
                alert: {
                    ...state.alert,
                    text: action.payload.text,
                    isShowed: action.payload.isShowed
                }
            }
        default:
            return state
    }
}