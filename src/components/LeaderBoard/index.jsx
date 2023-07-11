import React from 'react';
import classes from './LeaderBoard.module.scss';
import UserItem from "../UserItem";

const LeaderBoard = () => {
    return (
        <div className={classes.leaderboard}>
            <div className={classes.leaderList}>
                <UserItem name={'Alina Vlasova'}
                          points={92100}
                          place={1}
                />
                <UserItem name={'Maxim Ivanov'}
                          points={9600}
                          place={2}
                />
                <UserItem name={'Simba23129'}
                          points={9400}
                          place={3}
                />
            </div>
            <div className={classes.userStat}>
                <UserItem name={'Simba2311229'}
                          points={9400}
                          place={123}
                />
            </div>
        </div>
    );
};

export default LeaderBoard;