function palindrome(str1)
{

str2=str1.split("").reverse().join("");
    if(str1===str2)
    {
        console.log(str1 + " is a palindrome.");
    }
    else
    {
        console.log(str1 + " is not a palindrome.");
    }
}

palindrome("madam");
palindrome("hello");