import React from 'react';
import classes from "./Title.module.scss";

const Title = () => {
    return (
        <p className={classes.title}>
           <span className={classes.first}>T</span>
           <span className={classes.second}>E</span>
           <span className={classes.third}>T</span>
           <span className={classes.fourth}>R</span>
           <span className={classes.fifth}>I</span>
           <span className={classes.sixth}>S</span>
        </p>
    );
};

export default Title;