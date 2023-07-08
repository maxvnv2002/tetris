import React from 'react';
import classes from "./ProgressGroup.module.scss";
import RangeBar from "../../UIKit/RangeBar";
import {useSelector} from "react-redux";
import Music from "../../assets/img/Music";
import store from "../../store";
import * as actions from '../../store/actions/settingsActions'


const ProgressGroup = () => {
    const musicVolume = useSelector(state => state.settings.musicVolume)
    const soundVolume = useSelector(state => state.settings.soundVolume)

    const musicChangeHandler = (newValue) => {
        store.dispatch({type: actions.updateMusicVolume, payload: newValue})
    }
    const soundChangeHandler = (newValue) => {
        store.dispatch({type: actions.updateSoundVolume, payload: newValue})
    }

    return (
        <div className={classes.progressGroup}>
            <RangeBar value={musicVolume} onChange={(value) => musicChangeHandler(value)}>
                <Music value={musicVolume}/>
            </RangeBar>
            <RangeBar value={soundVolume} onChange={(value) => soundChangeHandler(value)}>
                🎵
            </RangeBar>
        </div>
    );
};

export default ProgressGroup;