import * as actions from '../actions/settingsActions'

const initialState = {
    isGreeting: true,
    isSettingsShowed: false,
    musicVolume: 50,
    soundVolume: 50
}

export default function settingsReducer(state = initialState, action) {
    switch (action.type) {
        case actions.stopGreeting:
            return {...state, isGreeting: false}
        case actions.showSettings:
            return {...state, isSettingsShowed: !state.isSettingsShowed}
        case actions.updateMusicVolume:
            return {...state, musicVolume: action.payload}
        case actions.updateSoundVolume:
            return {...state, soundVolume: action.payload}
        default:
            return state
    }
}