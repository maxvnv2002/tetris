import React from 'react';
import classes from './MainMenu.module.scss'
import LargeButton from "../LargeButton";
import Input from "../Input";
import {useSelector} from "react-redux";
import {icons} from "../../constants/icons";
import * as actions from '../../store/actions/settingsActions';
import SettingsPopup from "../SettingsPopup";
import SmallButton from "../SmallButton";
import store from "../../store";

const NameInput = () => {
    const isGreeting = useSelector(state => state.settings.isGreeting);
    const isSettingsShowed = useSelector(state => state.settings.isSettingsShowed);
    const formClasses = isGreeting
        ? `${classes.playForm} ${classes.playFormHidden}`
        : `${classes.playForm}`;

    const popupButtonHandler = () => {
        store.dispatch({ type: actions.showSettings })
    }

    return (
        <div className='container'>
            <div className={formClasses}>
                <div className={classes.choose}>
                    <p className={classes.title}>
                        Enter your <span>nickname</span>
                        <span className={classes.dash}>|</span>
                    </p>
                    <Input/>
                </div>
                <div className={classes.gameMode}>
                    <div className={`${classes.title} ${classes.hint}`}>
                        Select the <span>game</span> mode
                    </div>
                    <div className={classes.buttons}>
                        <LargeButton image={icons.gamepad} link='game'>Single Play</LargeButton>
                        <LargeButton image={icons.lightning} link='online'>Play online</LargeButton>
                    </div>
                </div>
            </div>
            { isSettingsShowed && (
                <SettingsPopup title={'Settings'}>
                    <SmallButton onClick={popupButtonHandler} image={icons.back}/>
                </SettingsPopup>
            ) }
        </div>
    );
};

export default NameInput;