import React, {useState} from 'react';
import Logo from "../Logo";
import classes from './Navigation.module.scss'
import store from "../../store";
import * as settingsActions from "../../store/actions/settingsActions";
import * as gameActions from "../../store/actions/gameActions";
import NavMenu from "../NavMenu";
import {useNavigate, useOutlet} from "react-router-dom";
import {resetGame} from "../../store/actions/gameActions";

const Navigation = () => {
    const navigate = useNavigate()
    const logoClickHandler = () => {
        navigate('/tetris');
        store.dispatch({type: resetGame})
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
            {
                isNameAnimating && (
                    <div className={`${classes.greeting} ${classes.nameGreeting}`}>
                        <p className={classes.name}
                           onAnimationEnd={nameAnimationEnd}
                        >
                           mxvnv
                        </p>
                    </div>
                )
            }
            {
                isLogoAnimating && (
                    <div className={`${classes.greeting} ${classes.logoGreeting}`}>
                        <Logo className={classes.logo}
                              onAnimationEnd={logoAnimationEnd}
                        />
                    </div>
                )
            }
        </nav>
    );
};

export default Navigation;