let a=[1,2,3,4,5,6,7,8,9,10];
let b=[2,4,6,8,10,12,14,16,18,20];
let  c=[];
let i,j,k=0
for (i=0;i<a.length;i++)
{
for (j=0;j<b.length;j++)
{
    if(a[i]==b[j])
       { c.push(a[i]);
                break;   

    }
}
}
console.log("Common elements in 2 arrays are" + c )

