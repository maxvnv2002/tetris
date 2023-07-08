import {tShapeFigure} from "./figures/T-Figure";
import {qShapeFigure} from "./figures/Q-Figure";
import {iShapeFigure} from "./figures/I-Figure";
import {zShapeFigure} from "./figures/Z-Figure";
import {sShapeFigure} from "./figures/S-Figure";
import {jShapeFigure} from "./figures/J-Figure";
import {lShapeFigure} from "./figures/L-Figure";

export const figuresNames = ['T', 'Q', 'I', 'Z', 'S', 'J', 'L']

export const figuresForms = {
    // T Q I Z S J L
    T: tShapeFigure,
    Q: qShapeFigure,
    I: iShapeFigure,
    Z: zShapeFigure,
    S: sShapeFigure,
    J: jShapeFigure,
    L: lShapeFigure
}