const name =["a","b","c","d","e","f","g","h","a","b","c","c"]
const num=[1,2,34,56,6,6,6,6,6,6,6,];
function singleName(array){
    const uniqueNames= [];
    for (const item of array){
        console.log(item);
        if(uniqueNames.includes(item)===false){
            uniqueNames.push(item);
        }
    }
    return uniqueNames;
}

const Cname=singleName(name);
// console.log(Cname);

function singleNum(number){
    // console.log(number);
    const uniqueNumber=[];
    console.log(uniqueNumber);
    for(const itemnumber of number){
        if(uniqueNumber.includes(itemnumber)===false){
            uniqueNumber.push(itemnumber);
        }
    }
    return uniqueNumber;
    
}

const numbers=singleNum(num);
console.log(numbers);