 function numbertype(x)
{
    let num=x;
if (num>0)
{
    return (num + " is Positive");
}
else if (num<0)
{
    return (num + " is Negative");
}
else
{
    return (num + " is Zero");
}
}

console.log(numbertype(-5));
console.log(numbertype(0));
console.log(numbertype(10));