// let char=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// for (let i=0;i<char.length;i++)
// {
//     console.log("ASCII value of " + char[i] + " is: " + char[i].charCodeAt(0));
// }

for (let i=0;i<255;i++)
{
    console.log("ASCII value of " + String.fromCharCode(i) + " is: " + i);
}
