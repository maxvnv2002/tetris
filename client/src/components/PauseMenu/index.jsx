import React from 'react';
import classes from './PauseMenu.module.scss';
import store from "../../store";
import * as gameActions from '../../store/actions/gameActions';
import * as settingsActions from '../../store/actions/settingsActions';
import {useNavigate} from "react-router-dom";
import SmallButton from "../../UIKit/SmallButton";
import {icons} from "../../constants/icons";

const PauseMenu = () => {
    const navigate = useNavigate();
    const playHandler = () => {
        store.dispatch({ type: settingsActions.hidePopup })
    }
    const restartHandler = () => {
        store.dispatch({ type: gameActions.resetGame })
        store.dispatch({ type: settingsActions.hidePopup })
    }
    const homeRedirectHandler = () => {
        navigate('/tetris')
        store.dispatch({ type: gameActions.resetGame })
        store.dispatch({ type: settingsActions.hidePopup})
    }

    return (
        <div className={classes.buttonsGroup}>
            <SmallButton onClick={homeRedirectHandler}
                         image={icons.home}>
            </SmallButton>
            <SmallButton onClick={restartHandler}
                         image={icons.restart}>
            </SmallButton>
            <SmallButton onClick={playHandler}
                         image={icons.play}>
            </SmallButton>
        </div>
    );
};

export default PauseMenu;