import React, {memo} from 'react';
import classes from "./ExtraLight.module.scss";
import classNames from "classnames";

const ExtraLight = memo(({ isPulse }) => {
    const pulsedClass = { [classes.pulsed]: isPulse }

    const topLeftLightClasses = classNames(
        classes.extraLightTopLeft,
        pulsedClass
    )
    const topRightLightClasses = classNames(
        classes.extraLightTopRight,
        pulsedClass
    )
    const bottomLeftLightClasses = classNames(
        classes.extraLightBottomLeft,
        pulsedClass
    )
    const bottomRightLightClasses = classNames(
        classes.extraLightBottomRight,
        pulsedClass
    )

    return (
        <>
            <div className={topLeftLightClasses}></div>
            <div className={topRightLightClasses}></div>
            <div className={bottomLeftLightClasses}></div>
            <div className={bottomRightLightClasses}></div>
        </>
    );
});

export default ExtraLight;