// # Recursion
// #### Write a function which can reverse string

const string = "hello world";

reverse = a => a <= 1 ? a : reverse(a.substr(1)) + a.charAt(0);
console.log(reverse(string)); // return dlrow olleh
