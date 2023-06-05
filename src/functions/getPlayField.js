export function getPlayField (playField, pieceX, pieceY, blocks) {

    let tempField = []
    for (let y = 0; y < playField.length; y++) {
        tempField[y] = []
        for (let x = 0; x < playField[y].length; x++) {
            tempField[y][x] = playField[y][x]
        }
    }
    for (let y = 0; y < blocks.length; y++) {
        for (let x = 0; x < blocks[y].length; x++) {
            if (blocks[y][x]) {
                tempField[y + pieceY][x + pieceX] = blocks[y][x];
            }
        }
    }
    return tempField
}