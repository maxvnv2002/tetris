import React from 'react';
import Logo from "../Logo";
import classes from './GreetingAnimation.module.scss'

const GreetingAnimation = ({isNameAnimating, isLogoAnimating, nameAnimationEnd, logoAnimationEnd}) => {
    return (
        <>
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
        </>
    );
};

export default GreetingAnimation;