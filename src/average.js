// Average of the absolute values of an array of numbers
function averageAbs(numbers) {
    // We expect the array to be non-null and non-empty
    if (numbers === null) {
        throw new Error("Array numbers must not be null.");
    }

    if( numbers.length === 0) {
        throw new Error("Array numbers must not be empty.");
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let d = numbers[i];
        if (d < 0) {
            sum -= d;
        } else {
            sum += d;
        }
    }
    return sum / numbers.length;
}
module.exports = averageAbs;