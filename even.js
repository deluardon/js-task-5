function allEven(number) {
    // console.log(number);
    const allEven = [];
    for (const numbers of number) {
        // console.log(numbers);
        if (numbers % 2 === 0) {
            console.log(" number is even and  true ", numbers);
            allEven.push(numbers);
           

        }
        else{
            console.log("not a even number", numbers);
        }
        
    }
    return allEven
    
}
console.log("allevent number",allEven);
const num = [2, 3, 5, 7, 8, 54, 6, 43, 567, 88, 900, 45, 78]

const addeven=allEven(num)
console.log(addeven);