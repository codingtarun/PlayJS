/**
 *
 * ==> JavaScript Key notes :
 * 1. A dynamic , weakly types programming language which is compalied at runtime.
 * 2. Aimed to make a webpage more dynamic and interactive.
 * 3. Runs on a webbrowser.
 * 4. Hosted language i.e runs on different envirnment - browsers, server etc.
 * 5. It is made to manupulate the HTML,CSS and can send HTTP request in the backbground etc.
 * 6. Not able to access the local files of the host machine.
 * 7. It doesn't directly interacts with the OS, but the browser provied it an environment to run on it.
 * 8. Google V8 JS engine is modified by developers and allowed to run on variety of machines , and this tool is called NODEJS.
 * 9. NODEJS can be set to executed JS on any machines so can be used to build a server.
 *
 * Ex. JS enables us to make a new request to the server without the need to reloading the entire webpage.
 *
 *
 * ==> How JS is executed:
 * 1. Browsers are build using Javascript Engines.
 * 2. JavaScript runs on JavaScript Engine of the browser.
 * 3. Popular JS engine V8(Chrome), SpiderMonkey(Firefox).
 * 4. JS engine life cycle :
 *          JS code ==> Parse code ==> Compile to Machine Code ==> Execute the code.
 * 5. All of this happens on a single thread.(More about it later).
 *
 * ==> Dynamic & Weekly typed language :
 * 1. Dynamic : Not pre-compiled, but is parsed and executed on the fly.
 * 2. Due to its dynamic nature it is able to switch the data types at runtime.
 * 3. Weekily Types : You don't have to tell JS the type of data, it automatically detects the data type.
 *
 * ==> JS runs on a host environment :
 * 1. JS engine can be hosted on different environment.
 * 2. Most popular and common environment is the browser environment.
 * 3. Server side environment is also getting popluar now.
 *
 *
 * ==> Brief History :
 * 1. 1995 : Netscape introduces "LiveScript" later known as "JavaScript".
 * 2. 1996 : Microsoft releases its own version of LS for IE.
 * 3. No standardization of JS , so need to write different script for different browsers.
 * 4. Late 1996 : JS submitted to ECMA (European Computer Manufacturers Association) to start standardization but Microsoft didn't joined it.
 * 5. 2006-2011 : Huge progress in JS ecosystem , and microsoft eventually joined in.
 * 6. Still evolving and new features are added every year.
 *
 *
 * ==> ECMAScript :
 * 1. Is is a standard that defines the core features and syntex of the scripting language.
 * 2. Created by ECMA International, an organization that sets the technical standard to ensure the consistency accross different implementation of different langauges.
 * 3. JavaScript, the most famous implementation of the specifications defined by ECMAScript.
 * 4. ECMAScript is not directly used, but via JavaScript implementation.
 *
 *
 *
 */

/**
 *
 * Basics Variables, Data Types, Operators & Functions
 *
 * Key notes :
 * 1. The position where the file is imported in our webpage effects how and when our code will be executes
 *
 *
 * Variables :
 * 1. A container for storing data that can be updated later.
 * 2. Initial value can be null/undefined.
 *
 *
 * ==> syntex :
 * 1. let : Modern / recommended / block-scoped.
 * 2. var : Function-scoped / can lead to issues due to hoisting and scope issue.
 *
 *
 *
 * Constant :
 * 1. A variable whose value can't be redeclared.
 * 2. Must be initialized at the time of declareation.
 *
 * ==> syntex :
 * 1. const : block-scoped
 *
 *
 *
 * Operators :
 * 1. Symbols or Keywords used to perform operations on values.
 *
 * JS support a variety of operators as following :
 * 1. Arithmetic Operators : Mathematical Calculation. +, -, *, /, %, **.
 * 2. Assignment Operators : Assiging values to variables. =, +=, -=, *=, /=, %=.
 * 3. Comparision Operator : Compare two values & return a boolean (true/false). ==, ===, !=, !==, >, <, >=, <=.
 * 4. Logical Operator : Logical Operations : &&, ||, !.
 * 5. Bitwise Operator : Operates at binary level. &, |, ^, ~, (CHECK LATER)
 * 6. Ternary Operator : A shorthand for if-else. condition ? ifTrueStatement : ifFalseStatement
 * 7. Type Operator : Check data type : typeOf, instanceOf.
 * 8. String Operator : concatinate (+) / add and assign (+=)
 *
 *
 *
 * Data types :
 * ==> Primitive data types : Immutable values.
 * 1. Number.
 * 2. String
 * 3. Boolean
 * 4. Undefined.
 * 5. Null.
 * 6. Symbol : a unique, immutable identifier.
 * 7. Bigint : handle the number which 'Number' type can't handle.
 *
 *
 * ==> Non-primitive data types
 * 1. Object :
 * 2. Array :
 * 3. Function :
 * 4. Date :
 *
 *
 *
 *
 *
 */

/**
 *
 * Functions :
 * 1. A block of reuseable code designed to perform a specific task.
 * 2. It can be executed whenever evoked and can be called as many as required times.
 * 3. When compiler reads a function , it doesn't immidietly executes the function. It first stores in into the memory and when the function is invoked , then it executes the function.
 * 4. Function themselves are Object.
 *
 * Types of function :
 * 1. Function declaration : A function is defined using the function keyword, followed by a name and parentheses.
 * 2. Function expression : A function can also be assigned to a variable. Such functions are anonymous (they have no name).
 * 3. Arrow function : A shorter syntax for writing functions, using the => arrow.
 * 4. Immidiately invoked function expression (IIFE) : Functions that are executed as soon as they are defined.
 * 5. Higher-Order function : Functions that accept other functions as arguments or return functions.
 *
 *
 *
 */

// 1. Function declaration : A function is defined using the 'function' keyword, followed by a 'name' and 'parentheses'.
function sayHello() {
  console.log("Hello JavaScript......");
}

// invoking function

sayHello();

// 2. Arrow function : A shorter syntax for writing functions, using the '=>' arrow.

const greetMsg = (name) => {
  console.log("ARROW FUNCTION " + name);
};

greetMsg("JavaScipt");

// Functions VS methods

/**
 *
 * Rest Parameters :
 * 1. Allows a JS function to accept an indefinate numbers of argument as an array.
 * 2. This is usefull when we don't know how many arguments a function will receive.
 * 3. Rest parameter must be the last argument declared in a function.
 * 4. We can have only one parameter
 *
 */
function restParam(...args) {
  // combine all input to an array
  console.log(args);
}

restParam("Tarun Chauhan");
restParam("TC", "PC", "YC");
restParam(1, 2, 3, 4, 5, 6, 7, 8);
/**
 *
 * Converting DataTypes :
 * JS allows the conversion of values from data type to another.
 * Two type of conversion :
 * 1. Imlicit Type conversion (Type coercion) : Automatically converts data types when performing operations.
 * 2. Explicit Type conversion (Type casting) : We manually convert data types using specific methods.
 *
 *
 *
 *
 *
 */

/**
 *
 * Hoisting : A JS mechanism where variables and functions declareations are moved to the top of their scope before code execution.
 *
 */

/**
 *
 * Function inside a function
 *
 */

function abc() {
  const xyz = function () {
    // only be used inside this function
    console.log("Local scopped function");
  };
  xyz(); // can't call this outside this function.
}

abc();

/**
 *
 * Callback function :
 * 1. A function that is passed as an argument to another function and is executed after the completion of that function.
 * 2. Widely used in asynchronous programming , event handlinh and higher order functions.
 *
 *
 */

function showResult(result) {
  // a function
  console.log(result);
}

function add(cb) {
  // a function that accepts function as an argument.
  cb(200);
}

add(showResult); // Passing a function to another function.

/**
 *
 * Bind : The bind() method in JavaScript is used to create a new function with a specific this value and optional preset arguments.
 * It does not invoke the function immediately but returns a new function that can be called later.
 *
 */

/**
 *
 * DOM :
 * 1. Document Object Model is a programming interface that represents an HTML or XML document as a tree structure.
 * 2. It allows JS to interact with, modify and manipulate webpage dynamically.
 *
 * Querying Elements :
 *
 *
 *
 *
 */

/**
 *
 * 50 PROJECTS CHALLANGE
 *
 *
 *
 */

// 01. Expanding cards
// JS code to select all the elements with a given class.
const expand = document.querySelectorAll(".expand-box__bg");
// returns the node list
console.log(expand);
// forEach is a higher order array function which accepts another functionn as an argument.
expand.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeFlexClasses();
    panel.classList.add("flex-8");
    panel.classList.remove("flex-1");
  });
});

// function declaration : Automatically hoisted to the top , no matter where it is declared.
function removeFlexClasses() {
  expand.forEach((panel) => {
    panel.classList.remove("flex-8");
    panel.classList.add("flex-1");
  });
}

// 02. Progress bar
// Get element by ID.
const btnPrevious = document.getElementById("btnPrevious");
const btnNext = document.getElementById("btnNext");

// Function Expression / store a function a variable/constant / in such cases a function is used as an "expression".
// Also hoisted but not initialized // can't call the function before its declaration.
const msg = function () {
  // anonymous function i.e without any name
  console.log("Another Button cllicked");
};

// store a function a object .
const progressBar = {
  title: "Progress Bar",
  //A function is called a method when it is stored inside an object.
  showMsg: function () {
    console.log("Button Clicked");
  },
};

// Add an event listner to the buttons & calling a method.
btnPrevious.addEventListener("click", progressBar.showMsg);
btnNext.addEventListener("click", msg);

console.log(typeof progressBar.showMsg); // type function

btnPrevious.addEventListener("mouseover", function () {
  // using anonymous function directly
  // use if we don't want this function anywhere else.
  // If we get an error we'll not be able to see the name of function where error occured.
  console.log("Button Hover");
});

btnNext.addEventListener("mouseout", () => {
  // Arrow function
  console.log("Mouse Out");
});

// 03. Tell me a dad joke

/**
 * JS fetch() :
 * 1. A JS API which provides a way to make network requests to retrieve resources or send data to a server.
 * 2. The fetch() api is based on promise(), meaning we can handle asynchronous operations easily with .then() and .catch().
 *
 */

const txtDadJoke = document.getElementById("dadJoke");
const btnTellMeAnother = document.getElementById("tellMeAnother");
function getJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => (txtDadJoke.innerHTML = data.joke))
    .then((error) => console.log("Error: ", error));
}
btnTellMeAnother.addEventListener("click", () => {
  getJoke();
});

/**
 * async/await :
 * 1. Used to handle asynchronous code in a more synchronous and readable manner.
 * 2. Introduced in ES8/ ECMAScript 2017 to work with promises, but it make asynchronous programming much easier to read and maintain by avoiding nested .then() callbacks.
 *
 *
 */

async function getDadJoke() {
  // async keyword is used to make a function as asynchronous
  // when a function is declared async it automatically returns a Promise, regardless of whether the function contains explicit return or not.

  let dataJoke = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  let data = await dataJoke.json();
  txtDadJoke.innerHTML = data.joke;
}
getDadJoke();

// 04. Key Details

const eventKey = document.getElementById("eventKey");
const eventKeyCode = document.getElementById("eventKeyCode");
const eventCode = document.getElementById("eventCode");

window.addEventListener("keydown", (e) => {
  eventKey.value = e.key;
  eventKeyCode.value = e.keyCode;
  eventCode.value = e.code;
});

// 04. FAQs toggle

const cardToggle = document.querySelectorAll(".cardToggle");

console.log(cardToggle);
cardToggle.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    let cardBody = toggle.closest(".card").querySelector(".card-body");
    cardBody.classList.toggle("hidden");
    if (toggle.classList.contains("fa-caret-square-down")) {
      toggle.classList.remove("fa-caret-square-down");
      toggle.classList.add("fa-caret-square-up");
    } else {
      toggle.classList.remove("fa-caret-square-up");
      toggle.classList.add("fa-caret-square-down");
    }
  });
});

// 05. Random Choices

/**
 * split() : A JS method used to split a string into an array based on the specified seprator.
 *
 *
 * filter() : A JS method which returns an array with the elements that pass a condition given in the callback function.
 *
 * trim() : A JS method to remove whitespaces from both ends of the string but doesn't modify the string.
 *
 * map() : A JS method to create a new array by applying a function to each element of the original array.
 */
const randomInputs = document.getElementById("randomInput");
const randomChoices = document.getElementById("randomChoices");

randomInputs.addEventListener("keyup", (e) => {
  createChoices(e.target.value);
});

function createChoices(input) {
  // 1.  split the input when user enters ','.
  const choices = input.split(",");
  //console.log(choices);
  // 2. return only those entries which are not empty.
  const afterFilter = choices.filter((choice) => choice.trim() !== "");
  //console.log(afterFilter);
  // 3. Map entire array and remove any whitespaces from the element
  const finalList = afterFilter.map((a) => a.trim());
  console.log(finalList);

  // loop through 'finalArray and display them as options'.

  finalList.forEach((choice) => {
    const option = document.createElement("span");
    option.classList.add(
      "bg-orange-400",
      "px-2",
      "py-1",
      "rounded-full",
      "text-white",
      "hover:bg-orange-600",
      "cursor-pointer"
    );
    option.innerText = choice;
    randomChoices.appendChild(option);
  });
}
