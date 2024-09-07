function even (x){
    if(x %2===0){
        return true;
    }
    else{
        return false;
    }
}

// const totla=(even(5));
// console.log(totla);

function dubble(x,y){
    if(x===true){
        const xvato =y*5;
        return xvato;
    }
    else{
        const yvato =y*10;
        return yvato;
    }
}
const vato = dubble(true,5);
const vato2 = dubble(false,5);
// console.log(vato);
// console.log(vato2);
const vato3 = sum(5,5);
const vato4 = sum(5,10);

function sum(number){
    const nam=number.length;
    return nam;
}

const man=sum([4,5,6,7,8,9]);
const man2=sum("man");
console.log(man);
console.log(man2);