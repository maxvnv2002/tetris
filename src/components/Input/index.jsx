import React from 'react';
import classes from './Input.module.scss'

const Input = () => {
    return (
        <input
            className={classes.input}
            type="text"
            placeholder='Enter here...'
        />
    );
};

export default Input;