console.log('this is conditional expressions tutorial');

let a = prompt("this is the prompt") ;
console.log(a);
console.log(typeof(a));

//but if we want to convert it into a int then what to do

a = Number.parseInt(a);
console.log("type after parsing the number ");

console.log(typeof(a));

if(a>45)
{
    console.log("number is greater than 45");
    
}
else if (a ==45){
    console.log("it is equal to  45 ");
    
}
else
{
    console.log('greatyer than 45');
    
}


//ternary operator

age = prompt("enter your age ")
c = age<18 ? "not drive ": "can drive";
console.log(c)