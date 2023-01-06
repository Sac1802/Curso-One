let celsius = 27;

let result  = (fahrenheit * (9/5) + 32 );

console.log(result);

//

for(let i = 1; i <= 24;i++){
    console.log(i + " A.M");
    if(i === 12){
        for(let a = 1; a <= 12; a++){
        console.log(a + " P.M");
    }
    break;
}
}