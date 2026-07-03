/*
//array general

let array1=[1,2,3,4,5];
console.log(array1);
console.log("-----------------------");
console.log(array1[0]);
console.log(array1[1]);
console.log(array1[2]);
console.log(array1[3]);
console.log(array1[4]);
console.log(array1[5]);
console.log("-----------------------");
console.log(array1.length);
console.log("-----------------------");

//push method
let array1=[1,2,3,4,5];

array2=array1;
array2=array2.push("6");
console.log(array2);

//shift method

array3=array1;
array3=array3.shift();
console.log(array3);
console.log(array1);



//slice method

let MainArray=[1,2,3,4,5,6,7,8,9];
let SubArray=MainArray.slice(2,5);
console.log(SubArray);


//splice method
 let strarray =["a","b","c","d","e"];
 console.log(strarray);
 splicedarray=strarray.splice(1,3,"x","y","z");
 console.log(splicedarray);


 //


//sort method

 arraychar=["2","s","a","x","1","b","c",2,3,4,5,false,true];

sortedarray=arraychar.sort();
console.log(sortedarray);

*/

let RepeatedtestID=["test1","test2","test3","test4","test5","test1","test2","test3","test4","test5"];
let uniqueId= new set(repeatedtestID);
console.log(uniqueId);