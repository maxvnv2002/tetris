export function getFramesByLevel(level) {
    let startFrames = 43;
    if (level < 9) {
        for (let i = 1; i < level; i++) {
            startFrames -= 5
        }
    }
    if (level === 9) startFrames = 6
    if (level > 9 && level <= 12) startFrames = 5
    if (level > 12 && level <= 15) startFrames = 4
    if (level > 15 && level <= 18) startFrames = 3
    if (level > 18 && level <= 28) startFrames = 2
    if (level >= 29) startFrames = 1
    return startFrames
}