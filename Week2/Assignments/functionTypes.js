
//1.Named function
function square()
{
    let x=10;
    let square=x*x;
    console.log("Square of the number is "+square);
}

square();

//2.Parameterized function
function multiply(a,b)
{
    let mul=a*b;
    console.log("Multiplication of the numbers is "+mul);
}

multiply(10,20);

//3.Function with return value
function add(c,d)
{
    let sum=c+d;
    return sum;
}

console.log("Addition of the numbers is "+add(10,20));

//callback function
function callback()
{
    console.log("Callback function executed");
}   

function executeCallback(callback)
{
    console.log("Executing callback function");
    callback();
}

executeCallback(callback);

//arrow function
const arrowFunction = (num1, num2) => {
    console.log("Arrow function addition of 2 numbers is "+(num1+num2));
}

arrowFunction(10,20);

//anonymous function
const anonymousFunction = function(a,b) {
    let sum=a+b;
    console.log("Sum of the numbers is "+sum);
}

anonymousFunction(10,20);