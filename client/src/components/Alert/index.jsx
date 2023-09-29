import React, {memo, useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import * as settingsActions from '../../store/actions/settingsActions'
import store from "../../store";
import classNames from "classnames";
import classes from './Alert.module.scss'
import {icons} from "../../constants/icons";


const Alert = memo(() => {
    const { text: alertName, isShowed } = useSelector(state => state.settings.alert)
    const [alertClasses, setAlertClasses] = useState(classNames(classes.alert))
    useEffect(() => {
        if (isShowed === true) {
            setAlertClasses(classNames(classes.alert, classes.alertShowed))
            setTimeout(() => {
                setAlertClasses(classNames(classes.alert))
                store.dispatch({
                    type: settingsActions.updateAlert,
                    payload: {
                        text: '',
                        isShowed: false
                    }
                })
            }, 2000)
        }
    }, [isShowed])

    return (
        <div className={classNames(alertClasses)}
        >
            <p className={classNames(classes.title)}>
                <span>{ icons.warning }</span>
                Alert
            </p>
            <p className={classNames(classes.text)}>
                { alertName }
            </p>
        </div>
    );
});

export default Alert;