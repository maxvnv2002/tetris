import {figuresNames} from "../constants/figuresInfo";
import {figuresForms} from "../constants/figuresInfo";

export const getRandomFigure = () => {
    function getRandomIndex (min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }
    const keyIndex = getRandomIndex(0, figuresNames.length - 1);
    const randomFigureForms = figuresForms[figuresNames[keyIndex]];

    return {
        blocks: randomFigureForms[0],
        name: figuresNames[keyIndex]
    }
}