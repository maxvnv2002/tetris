import React, {memo, useState} from 'react';
import Logo from "../Logo";
import classes from './Navigation.module.scss'
import store from "../../store";
import * as settingsActions from "../../store/actions/settingsActions";
import * as gameActions from "../../store/actions/gameActions";
import NavMenu from "../NavMenu";
import {useNavigate} from "react-router-dom";
import GreetingAnimation from "../GreetingAnimation";

const Navigation = memo(() => {
    const navigate = useNavigate()
    const logoClickHandler = () => {
        navigate('/tetris');
        store.dispatch({ type: gameActions.resetGame })
        store.dispatch({ type: settingsActions.hidePopup })
    }

    const [isNameAnimating, setIsNameAnimating] = useState(true)
    //
    const startLogoClasses = `${classes.logo} ${classes.logoHidden}`
    const [logoClasses, setLogoClasses] = useState(startLogoClasses)
    const [isLogoAnimating, setIsLogoAnimating] = useState(false)
    //
    const nameAnimationEnd = () => {
        setIsNameAnimating(false)
        setIsLogoAnimating(true)
    }
    const logoAnimationEnd = () => {
        setIsLogoAnimating(false)
        setLogoClasses(`${classes.logo}`)
        store.dispatch({type: settingsActions.stopGreeting})
    }

    return (
        <nav className={classes.navigation}>
            <div className='container'>
                <ul>
                    <li>
                        <Logo className={logoClasses} onClick={logoClickHandler}/>
                    </li>
                    <li>
                        <NavMenu/>
                    </li>
                </ul>
            </div>
            <GreetingAnimation isNameAnimating={isNameAnimating}
                               isLogoAnimating={isLogoAnimating}
                               nameAnimationEnd={nameAnimationEnd}
                               logoAnimationEnd={logoAnimationEnd}
            />
        </nav>
    );
});

export default Navigation;