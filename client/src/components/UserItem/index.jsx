import React from 'react';
import classes from "./UserItem.module.scss";
import {icons} from "../../constants/icons";

const UserItem = ({ place, name, points }) => {
    function getUserMedal (place) {
        switch (place) {
            case 1:
                return icons.firstPlace
            case 2:
                return icons.secondPlace
            case 3:
                return icons.thirdPlace
            default:
                return icons.medal
        }
    }
    const userMedal = getUserMedal(place)

    return (
        <div className={classes.item}>
            <div className={classes.userInfo}>
                <div className={classes.place}>{ place }</div>
                <p className={classes.medal}>{ userMedal }</p>
                <p className={classes.name}>{ name }</p>
            </div>
            <p className={classes.stat}>{points} points</p>
        </div>
    );
};

export default UserItem;