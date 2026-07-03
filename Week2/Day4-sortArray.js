let unsorted=[5,2,3,1,4,7,6,9,8];

let AscendingSorted=unsorted.sort((a, b) => a - b);   
console.log("Ascending sorted array is: " + AscendingSorted);

let DescendingSorted=unsorted.sort((a, b) => b - a);
console.log("Descending sorted array is: " + DescendingSorted);  

let testsorted=unsorted.sort((a,b) => a+b);
console.log("Test sorted array is: " + testsorted);

