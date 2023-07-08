import React, {useState} from 'react';
import classes from './MainMenu.module.scss'
import LargeButton from "../../UIKit/LargeButton";
import Input from "../../UIKit/Input";
import {useSelector} from "react-redux";
import {icons} from "../../constants/icons";
import * as actions from '../../store/actions/settingsActions';
import SettingsPopup from "../SettingsPopup";
import SmallButton from "../../UIKit/SmallButton";
import store from "../../store";
import Popup from "../Popup";
import ProgressGroup from "../ProgressGroup";
import {useNavigate} from "react-router-dom";
import * as settingsActions from '../../store/actions/settingsActions'

const NameInput = () => {
    const navigate = useNavigate();
    const isGreeting = useSelector(state => state.settings.isGreeting);
    const isSettingsShowed = useSelector(state => state.settings.isSettingsShowed);
    const formClasses = isGreeting
        ? `${classes.playForm} ${classes.playFormHidden}`
        : `${classes.playForm}`;

    const [nickname, setNickname] = useState('')

    const popupButtonHandler = () => {
        store.dispatch({ type: actions.showSettings })
    }

    const singlePlayHandler = () => {
        if (nickname) {
            navigate('game')
        } else {
            store.dispatch({
                type: settingsActions.updateAlert,
                payload: {
                    text: 'Nickname can`t be empty',
                    isShowed: true
                }
            })
        }

    }
    const playOnlineHandler = () => {
        navigate('online')
    }

    return (
        <div className='container'>
            { isSettingsShowed ? (
                    <Popup title={'Settings'}>
                        <>
                            <ProgressGroup/>
                            <SmallButton onClick={popupButtonHandler} image={icons.back}/>
                        </>
                    </Popup>
                ) :
                (
                    <div className={formClasses}>
                        <div className={classes.choose}>
                            <p className={classes.title}>
                                Enter your <span>nickname</span>
                                <span className={classes.dash}>|</span>
                            </p>
                            <Input value={nickname} onChange={setNickname}/>
                        </div>
                        <div className={classes.gameMode}>
                            <div className={`${classes.title} ${classes.hint}`}>
                                Select the <span>game</span> mode
                            </div>
                            <div className={classes.buttons}>
                                <LargeButton image={icons.gamepad}
                                             onClick={singlePlayHandler}
                                >
                                    Single Play
                                </LargeButton>
                                <LargeButton image={icons.lightning}
                                             onClick={playOnlineHandler}
                                >
                                    Play online
                                </LargeButton>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default NameInput;