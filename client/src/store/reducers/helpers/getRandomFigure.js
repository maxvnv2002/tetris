import {figuresNames} from "../../../constants/figuresInfo/figuresInfo";
import {figuresForms} from "../../../constants/figuresInfo/figuresInfo";

function getRandomIndex (min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

export const getRandomFigure = () => {

    const keyIndex = getRandomIndex(0, figuresNames.length - 1);
    const randomFigureForms = figuresForms[figuresNames[keyIndex]];

    return {
        blocks: randomFigureForms[0],
        name: figuresNames[keyIndex]
    }
}