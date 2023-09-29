import React, {useState} from 'react';
import classes from './MainMenu.module.scss'
import LargeButton from "../../UIKit/LargeButton";
import Input from "../../UIKit/Input";
import {useSelector} from "react-redux";
import {icons} from "../../constants/icons";
import {useNavigate} from "react-router-dom";
import {setNickname, showAlert} from "../../store/actionCreators";
import logo from "../Logo";

const NameInput = () => {
    const navigate = useNavigate();
    const isGreeting = useSelector(state => state.settings.isGreeting);

    const isSettingsShowed = useSelector(state => state.settings.isSettingsShowed);
    const isLeaderBoardShowed = useSelector(state => state.settings.isLeaderBoardShowed);
    const isMainContentShowed = isSettingsShowed || isLeaderBoardShowed;

    const formClasses = isGreeting
        ? `${classes.playForm} ${classes.playFormHidden}`
        : `${classes.playForm}`;

    const { nickname } = useSelector(state => state.settings)

    const singlePlayHandler = () => {
        if (nickname.length > 12) {
            showAlert('The length of the nickname cannot be more than 12 characters');

        }
        if (!nickname) {
            showAlert('Nickname can`t be empty');
            return;
        }
        navigate('game')
    }
    const playOnlineHandler = () => {
        navigate('online')
    }

    return (
        <div className='container'>
            { !isMainContentShowed && (
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
            )}


        </div>
    );
};

export default NameInput;