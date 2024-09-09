const jim=122;
const kim=13;
const tim=23;

if(kim>jim && jim>tim){
    console.log("i am a jim boss",jim);
}
else if (kim>jim && tim>kim){
    console.log("i am a kim boss",kim);
}
else{
    console.log("i am a tim boss",tim);
}

function max (x,y,z){
    if(x>y && x>z){
        return x;
    }
    else if(y>x && y>z){
        return y;
    }
    else{
        return z;
    }
    
}
console.log(max(1,2,3));