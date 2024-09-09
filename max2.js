const number = [4, 5, 67, 88, 4, 4];

function max(number) {
    let max = number[0];
    console.log(max);
    for (const numbers of number) {
        if (numbers<max) {
            max = numbers
        }
        // console.log(numbers);
    }
    return max
}

const max1 = max(number);
console.log(max1);