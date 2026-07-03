Fib(7)
function Fib(n) {
    fibArray = [0, 1];
    i=0,j=1,arraylen=2;
//Normal Fibonacci
// do
// {
//     console.log(i);
//     j=i+j;
//     i=j-i;
// }while( --n>0);


//Using Array
    do
{
    let k=fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
    fibArray.push(k);
    arraylen++;
}while( arraylen<n);
console.log(fibArray);
}
