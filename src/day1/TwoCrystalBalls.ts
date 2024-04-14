export default function two_crystal_balls(breaks: boolean[]): number {
    // my solution:
    const SQRT = Math.floor(Math.sqrt(breaks.length));
    let pivot = SQRT;
    while (pivot < breaks.length) {
        const currentValue = breaks[pivot];
        if (currentValue) {
            break;
        } 
        // don't get out of scope:
        if (pivot + SQRT < breaks.length) {
            pivot = pivot + SQRT;
        } else {
            pivot = breaks.length;
        }
    }
    // edge case for when there is no true in the array
    if (pivot === breaks.length) {
        return -1;
    }
    let counter = SQRT;
    while (counter > 0) {
        if (!breaks[pivot - 1]) {
            return pivot;
        }
        pivot = pivot - 1;
        counter = counter - 1;
    }
    return -1;
}

// school solution:

// const jumpAmount = Math.floor(Math.sqrt(breaks.length));
// let i = jumpAmount;
// for (; i < breaks.length; i += jumpAmount) {
//     if (breaks[i]) {
//         break;
//     }
// }
// i -= jumpAmount;
// for (let j = 0; j<jumpAmount && i < breaks.length; ++j, ++i) {
//     if (breaks[i]) {
//         return i;
//     }
// }
// return -1;
