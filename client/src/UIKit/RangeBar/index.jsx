import React, {useState} from 'react';
import Volume from "../../assets/img/Music";
import classes from './RangeBar.module.scss'
const RangeBar = ({children, value, onChange}) => {


    return (
        <div className={classes.wrap}>
            <p>{ children }</p>
            <div className={classes.inputWrap}>

                <input
                    type='range'
                    min={0}
                    max={100}

                    value={value}
                    onChange={(event) => onChange(event.currentTarget.value)}
                />
            </div>
        </div>

    );
};

export default RangeBar;