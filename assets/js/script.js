/**
 *
 * JavaScript: A dynamic weekly types programming language which compile on runtime.
 * => Created to make Webpages dynamic.
 * => Originally named 'LiveScript' but due to the popularity of 'Java' back in the days , it is renamed to 'JavaScript'.
 * => Java & JavaScript has nothing in common.
 *
 */

console.log("LOADED");

/**
 *
 * How is JavaScript executed?
 * => User request the page
 * => Server sends the JS code as it is.
 * => JS code is PARSED -> COMPILE TO MACHINE CODE -> EXECUTED on the browsers using JS engines (V8(Google) & Spider Monkey (Firefox)).
 *
 */


/**
 *
 * Dynamic VS Weakly typed Language
 * => Dynamic: On the fly compiled / Not pre-compiled.
 * => Code evaluated and executed at the runtime.
 * => Code can change over time ex. variable type can change over time.
 *
 *
 * => Weakly typed: We don't have to declare the data type.
 * => JS will automatically detect the data type i.e weakly typed.
 *
 */


/**
 *
 * => JS is executed on hosted environment.
 * => Most popular JS engines are v*8 from Google & spider monkey from firefox.
 * => JS can't access local files.
 * => Modified version of V8 is run on dedicated machines, working as webservers.
 *
 */


/**
 *
 * Brief history of JS
 * => Netscape introduces JS in 1995 named 'LiveScript'.
 * => Microsoft introduced its own version of JS for IE.
 * => Late 1996 : JS was submitted to the ECMA (European Computer Manufacturers Association) to start standardization of JS.
 * => 1997-2005 : Much standard syntax and features were set for JS, but Microsoft didn't join in.
 * => 2006-2011 : Huge improvements were made and Microsoft eventually joined in.
 * => ECMAScript : It is not a programming language itself, but it sets the standard syntax & features for the scripting languages.
 * => JavaScript is the most popular implementation of ECMAScript right now.
 * =>
 */


/**
 *
 * Variables & Constants :
 *
 * => Variables are used to store data in JavaScript. You can declare variables using var, let, or const.
 * => var → Function-scoped, can be re-declared and updated.
 * => let → Block-scoped, cannot be re-declared but can be updated.
 * => const → Block-scoped, cannot be re-declared or updated.
 *
 */


/**
 *
 * Data Types in JS:
 * => JavaScript has two main categories of data types:
 * 1. Primitive Data Types: These are immutable (cannot be changed) and stored directly in memory.
 *      1.1. String : "Hello".
 *      1.2. Number : 1,2,34,45
 *      1.3. Boolean : true/false.
 *      1.4. Undefined : let x;
 *      1.5. Null : let x = null;
 *      1.6. Bigint : Used for very large numbers.
 *      1.7. Symbol : Symbol('id')/ A unique and immutable value, often used as object keys.
 * 2. Non-Primitive Data Types: These are mutable and stored by reference.
 *      2.1. Object : Collection of key-value pair .
 *      2.2. Array : A list of values.
 *      2.3. Function : A reusable block of code.
 *
 *
 *
 *  => Checking datatype : 'typeof' inbuilt JS function used to check the data type.
 *  => typeof null returns "object" due to a legacy JavaScript bug.
 *  => Arrays and functions are technically objects in JavaScript.
 *
 *
 *  => String :
 *  => A string in JavaScript is a sequence of characters enclosed in single ('), double ("), or backticks (`).
 *  => String Properties & Methods :
 *      1. string.length : Inbuilt JS string property which returns the string length.
 *      2. Some common string methods :
 *          2.1. toUpperCase() : Converts all characters to uppercase.
 *          2.2. toLowerCase() : Converts all characters to lowercase.
 *          2.3. indexOf() : Returns the index of the first occurrence of the substring.
 *          2.4. slice() : Extracts a portion of the string (end index not included).
 *          2.5. substring() : Similar to slice(), but does not support negative indices.
 *          2.6. charAt() : Returns the character at the specified index.
 *          2.7. replace(old, new) : Replaces first occurrence of a substring.
 *          2.8. split(separator) : Splits a string into an array based on a separator.
 *          2.9. trim() : Removes spaces from both ends of the string.
 *          2.10. includes(substring) : Checks if a string contains a given substring.
 *          ANY MANY MORE
 *
 */


/**
 *
 * => Function  : A function in JavaScript is a reusable block of code designed to perform a specific task.
 * => It allows you to write modular and maintainable code.
 *
 * => Types of functions :
 * 1. Function Declaration(named function ) : A function with a name.
 *          function funOne(){
 *                 return "Hello JS";
 *          }
 *
 * 2. Function Expression(anonymous function) : A function assigned to a variable.
 *          const funTwo = function(){
 *              return "Hello JS";
 *          }
 *
 * 3. Arrow function : A shorter syntax to write a function .
 *          const funThree = () => {
 *              return "Hello JS";
 *          }
 *
 * 4. Immediately invoked function expression (IIFE) : Function that runs imminently after its invocation.
 *          (function(){
 *              console.log("Hello JS");
 *          })
 *
 *
 * => Function arguments and parameters : A function can accept parameters as per the requirment.
 *          const abc = (num1,num2) => {
 *              return num1 + num2;
 *          }
 *
 * => If no parameter is passed then we can set a default parameter.
 *         const xyz = (msg = 'Hello JS') => {
 *             return msg;
 *         }
 *
 * => Rest Parameters : Inbuilt JS feature that allows a function to accept the multiple input , in form of an array.
 *      const multipleInput = (...args) => {
 *          console.log(args);
 *      }
 *
 *
 * => Callback function : A function passed as an argument to another function.
 *       const callbackFun = (name,callback) => {
 *           console.log(callback(name));
 *       }
 *
 *       const callback = (msg) {
 *            return msg;
 *       }
 *
 *  => Higher-order function :A function that accept another function as an argument or returns a function.
 *      function createMultiplier(factor) {
 *            return (num) => num * factor;
 *      }
 *      const calculate = createMultiplier(2);
 *
 *      console.log(calculate(3));
 *
 * => A variable declared outside the function is accessible everywhere.
 * => A variables declared inside the function is not accessible outside of that function.
 *
 *
 *
 * => Closures : A function inside another function that retains access to the outer function's variables.
 *      function outer(){
 *          let count = 0 ;
 *          return function inner(){
 *              count++;
 *              console.log(count);
 *          }
 *      }
 *
 *      const counter = outer();
 *      counter();
 *      counter();
 *
 * => Asynchronous Function(async/wait) : Used to handle asynchronous operations in JavaScript.
 *      async function fetchData(){
 *          let response = await fetch(url);
 *          let data = wait response.json();
 *          console.log(data);
 *      }
 *
 */



