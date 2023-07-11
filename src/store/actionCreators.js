import store from "./index";
import * as settingsActions from "./actions/settingsActions";

export function showAlert(message) {
    store.dispatch({
        type: settingsActions.updateAlert,
        payload: {
            text: message,
            isShowed: true
        }
    })
}