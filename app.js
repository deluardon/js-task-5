function app(x){
    const even=[];
    const odd=[];
    for(const num of x){
        if(num % 2 === 0){
            even.push(num);
        }
        else{
            odd.push(num);
        }
      
    }
    let oddtotal=0;
    for(const numbers of odd){
        oddtotal+=numbers;
     
    }
let eventotal=0;
    for(const numbers of even){
        eventotal+=numbers;
    }
    const count=even.length;
    console.log(count);
    console.log(even);
    console.log(odd);
    console.log(oddtotal);
    console.log(eventotal);
}

const number =[2,3,4,56,7]


const total =app(number);

