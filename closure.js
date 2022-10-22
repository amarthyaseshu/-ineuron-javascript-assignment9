/*
 1. Carefully observe this example.
a) Is the InnerFunction() a closure?
Ans: Yes the InnerFunction() is a closure as it has scope of the outer variable of the outer function

b) What is output of this program
Ans: The program alerts 100
*/

/*
2. What is the difference between a closure and a scope ?
Ans: When we create a function within another function, then the inner function is closure.
This closure is usually returned so we can use the outer function’s variables.
Whereas a scope in JavaScript defines what variables you have access to.
There are two kinds of scope – global scope and local scope.
*/

/*
3. What is a lexical scope and how is it related to closure?
Ans: The inner function has access to the outer function’s variables. This is called lexical scoping.
The inner function is called closure
*/

//4. logs 3, 3 times after 3 seconds, due to var scope, the inner function keeps only reference to only 1 final value
