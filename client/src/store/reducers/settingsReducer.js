import * as actions from '../actions/settingsActions'

const initialState = {
    nickname: '',
    isGreeting: true,
    isSettingsShowed: false,
    isLeaderBoardShowed: false,
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
        case actions.showPopup:
            return {...state, ...action.payload}
        case actions.hidePopup:
            return {...state, isSettingsShowed: false, isLeaderBoardShowed: false}
        case actions.updateMusicVolume:
            return {...state, musicVolume: action.payload}
        case actions.updateSoundVolume:
            return {...state, soundVolume: action.payload}
        case actions.updateNickname:
            return {...state, nickname: action.payload}
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