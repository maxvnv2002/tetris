import React from 'react';

const Music = ({value}) => {
    const volumeOff = '🔇';
    const volumeLow = '🔈';
    const volumeMedium = '🔉';
    const volumeHigh = '🔊';
    if (value > 0 && value < 34) {
        return volumeLow
    }
    else if (value > 33 && value < 67) {
        return volumeMedium
    }
    else if (value > 66) {
        return volumeHigh
    }
    else return volumeOff
};

export default Music;