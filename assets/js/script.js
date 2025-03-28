/**
 *
 * JavaScript: A dynamic,weekly types programming language which compile on runtime.
 * => Created to make Webpages dynamic.
 * => Originally named 'LiveScript' but due to the popularity of 'Java' back in the days , it is renamed to 'JavaScript'.
 * => Java & JavaScript has nothing in common.
 *
 */

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


/**
 *
 * Functions VS Methods :
 *
 *
 *
 *
 * => Storing a function as a property of an object.
 *
 */


const js = { // This is an object
    greetMsg : function() { // this is a function stored in a key-value pair inside an object.
        console.log("Hello World!");
    }
}

js.greetMsg(); // accessing the function inside an object.

// Another example of an function stored inside an object is the button properties .

// const someBtn = document.getElementById("someBtn"); // Accessing the button using DOM.
// someBtn.addEventListener("click", function() { // accessing the functions stored inside the button obj.
//     console.log("Hello World!");
// })


/**
 *
 * Functions are object with some predefined properties.
 *
 */

function funOne(){ //  function declaration example
    console.log("Functions are object !");
}

console.log(typeof funOne);

/**
 *
 * Storing  functions in a variables
 *
 */
const funTwo = function (){ // Function expression example
    console.log("Function stored in a variable");
}

funTwo();


/**
 *
 * => Function Declaration :
 *  1. Always hoisted to the top of the file and is initialized.
 *  2. we can call functions even before it is declared.
 *
 *
 * => Function Expression :
 *  1. Hoisted at the top but not initialized.
 *  2. Can't call function before defining it.
 *
 *
 *
 */


/**
 *
 * Anonymous function : Function without a name.
 * ex: we can use anonymous function with addEventListener property.
 *
 * Anonymous function are challenging to debug if it has some error as it doesn't have name.
 *
 *
 */

document.getElementById('btnAppStoreMinimize').addEventListener('click',() =>  {
    // anonymous function is passed to a higher-order function i.e addEventListener
    console.log('App StoreMinimize!');
});

/**
 *
 * Arrow function : Short form of function
 *
 */

const funThree = () => {
    console.log("Arrow function example");
}

funThree();

const msg = "Shortest Function code";
const funFour = () => msg;

console.log(funFour());


/**
 *
 * Rest Parameter : The rest parameter allows a function to accept an indefinite number of arguments as an array.
 * It helps when we don't know how many arguments will be passed.
 *
 */


function restFun(...num){ // Accepting inputs as array.
    let sum = 0;
    for(let i = 1; i < num.length; i++){
            sum += num[i];
    }
    return sum;
}

console.log(restFun(2,4,5,6,8,6,4,3,3,3,4,45,5,5,5)); // Indefinite numbers of input

/**
 *
 * => Functions inside a Function :
 *  1. We can define a function inside another function, which is known as a nested function or inner function.
 *  2. The inner function has access to the variables and parameters of the outer function.
 *
 */


function outerFun(){
    console.log("Outer fun!");
    const innerFun = () => {
        console.log("Inner fun!");
    }
    innerFun();
}

outerFun();


/**
 *
 * => Callback functions :
 * 1. A callback function is a function passed as an argument to another function.
 * 2. It is executed after the main function has finished its operation.
 * 3. Callbacks are commonly used in asynchronous programming, such as handling events, reading files, or making API requests.
 *
 */

function greetFun(msg,callbackFun){
    callbackFun();
    console.log(msg);
}

function showGreetMsg(){
    console.log("A call back function");
}

greetFun("This is a callback function example",showGreetMsg)


/**
 *
 * bind() :  LATER
 *
 */


/**
 *
 * DOM : The Document Object Model (DOM) is a programming interface for web documents.
 * It represents the HTML document as a tree structure, allowing JavaScript to manipulate elements dynamically.
 * 1. It represents HTML as object that JS can interact with.
 * 2. It allows dynamic updates without reloading the page.
 * 3. JS provides many functionalities to access the HTML DOM elements and modify them.
 * 4. DOM automatically create `Element Node Tree` for every HTML structure in the page.
 *
 *
 * => document: Represents the DOm object and allows JS to interact with the HTML elements.
 * => window: Represents the browser window and provides access to global functions, properties and events etc.It is top most object of which `document` is an object
 *
 */


/**
 *
 * Attributes & Properties :
 * 1.
 *
 *
 */


/**
 *
 * JavaScript Asynchronous Programming:
 * 1. JS is a single threaded programming language i.e it executes one task at a time.
 * 2. JS handles time consuming tasks without blocking the thread using the concept of asynchronous programming.
 *
 *
 *
 */

let count = 0;


console.log(count);

setTimeout(()=>{ // A sync timer which will execute the code after 2 seconds
    for (let i = 1; i < 10000; i++){
        count +=i;
    }
    console.log(count);
}, 2000);

console.log("Executed"); // this code will not be blocked now


/**
 * Event loop: The Event Loop is the mechanism that manages asynchronous tasks like setTimeout(), Promises, and API calls.
 * 1. Runs all the time and check if we have pending tasks.
 *
 *
 * => Call stack: JS execution stack / follows Last In , First Out execution.
 * 1. When a function is called , it is added (pushed) to the top of the stack.
 * 2. When execution finished it is removed (popped) from the stack.
 * 3. JS always executes the top function in stack before moving to next one.
 *
 */


function first() {
    second();
    console.log("First function");
}

function second() {
    third();
    console.log("Second function");
}

function third() {
    console.log("Third function");
}

first();

/**
 *
 * 🔍 Execution Flow
 * ✅ first() is called → Added to Stack
 * ✅ second() is called inside first() → Added to Stack
 * ✅ third() is called inside second() → Added to Stack
 * ✅ console.log("Third function") executes → third() is removed
 * ✅ console.log("Second function") executes → second() is removed
 * ✅ console.log("First function") executes → first() is removed
 *
 *
 * 🛠 Call Stack Step-by-Step
 *
 * 1. first() → PUSHED
 * 2. second() → PUSHED
 * 3. third() → PUSHED
 * 4. console.log("Third function") → EXECUTED
 * 5. third() → POPPED
 * 6. console.log("Second function") → EXECUTED
 * 7. second() → POPPED
 * 8. console.log("First function") → EXECUTED
 * 9. first() → POPPED
 *
 */

/**
 *
 * JS handles Async code with the help of WebAPIs & Event Loop , not the call Stack.
 *
 * 📌 Async functions (setTimeout, fetch, Promises) do NOT block the Call Stack.
 *
 */

console.log("Start");

setTimeout(() => {
    console.log("Inside setTimeout");
}, 0);

console.log("End");

/**
 *
 * 🔍 Execution Flow
 * ✅ "Start" is logged → Call Stack executes it
 * ✅ setTimeout() moves to Web API, Call Stack ignores it for now
 * ✅ "End" is logged
 * ✅ Event Loop moves setTimeout() callback to Call Stack after everything is done
 *
 * => The Event Loop continuously checks if the Call Stack is empty.
 * => If it is, it moves pending tasks from the queues to the Call Stack for execution.
 *
 *
 * 6️⃣ Summary & Key Takeaways
 * ✅ Call Stack follows Last In, First Out (LIFO)
 * ✅ Each function call is pushed to the Call Stack and removed when done
 * ✅ Deep recursion without a base case leads to Stack Overflow
 * ✅ Asynchronous functions (setTimeout, fetch, Promises) do NOT block the Call Stack
 * ✅ JavaScript uses the Event Loop to handle async operations
 *
 */


/**
 *
 * Promise :
 *
 */