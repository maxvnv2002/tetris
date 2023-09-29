import React from 'react';
import classes from './Input.module.scss'

const Input = ({value, onChange}) => {
    return (
        <input
            className={classes.input}
            type="text"
            placeholder='Enter here...'
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
};

export default Input;