/**
 *
 * ==> JavaScript keynotes:
 *
 * 1. A dynamic, weakly types programming language which is complied at runtime.
 * 2. Aimed to make a webpage more dynamic and interactive.
 * 3. Runs on a web browser.
 * 4. Hosted language i.e. runs on different environment - browsers, server etc.
 * 5. It is made to manipulate the HTML,CSS and can send HTTP request in the background, etc.
 * 6. Not able to access the local files of the host machine.
 * 7. It doesn't directly interact with the OS, but the browser provided it an environment to run on it.
 * 8. Google V8 JS engine is modified by developers and allowed to run on a variety of machines , and this tool is called NODEJS.
 * 9. NODE.JS can be set to execute JS on any machines so can be used to build a server.
 *
 * Ex. JS enables us to make a new request to the server without the need to reload the entire webpage.
 *
 *
 * ==> How JS is executed:
 * 1. Browsers are built using JavaScript Engines.
 * 2. JavaScript runs on JavaScript Engine of the browser.
 * 3. Popular JS engine V8(Chrome), SpiderMonkey(Firefox).
 * 4. JS engine life cycle :
 *          JS code ==> Parse code ==> Compile to Machine Code ==> Execute the code.
 * 5. All of this happens on a single thread.(More about it later).
 *
 * ==> Dynamic & Weekly typed language :
 * 1. Dynamic : Not pre-compiled, but is parsed and executed on the fly.
 * 2. Due to its dynamic nature, it is able to switch the data types at runtime.
 * 3. Weekly Types : You don't have to tell JS the type of data, it automatically detects the data type.
 *
 * ==> JS runs on a host environment:
 * 1. JS engine can be hosted in different environments.
 * 2. The Most popular and common environment is the browser environment.
 * 3. Server side environment is also getting popular now.
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
 * ==> ECMAScript:
 * 1. It Is a standard that defines the core features and syntax of the scripting language.
 * 2. Created by ECMA International, an organization that sets the technical standard to ensure
 * the consistency across different implementations of different languages.
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
 * Keynotes:
 * 1. The position where the file is imported in our webpage effects how and when our code will be executes
 *
 *
 * Variables :
 * 1. A container for storing data that can be updated later.
 * 2. Initial value can be null/undefined.
 *
 *
 * ==> syntax :
 * 1. let : Modern / recommended / block-scoped.
 * 2. var : Function-scoped / can lead to issues due to hoisting and scope issue.
 *
 *
 *
 * Constant :
 * 1. A variable whose value can't be redeclared.
 * 2. Must be initialized at the time of declareation.
 *
 * ==> syntax :
 * 1. const : block-scoped
 *
 *
 *
 * Operators :
 * 1. Symbols or Keywords used to perform operations on values.
 *
 * JS supports a variety of operators as following :
 * 1. Arithmetic Operators: Mathematical Calculation. +, -, *, /, %, **.
 * 2. Assignment Operators: Assigning values to variables. =, +=, -=, *=, /=, %=.
 * 3. Comparison Operator: Compare two values & return a boolean (true/false). ==, ===, !=, !==, >, <, >=, <=.
 * 4. Logical Operator: Logical Operations : &&, ||, !.
 * 5. Bitwise Operator: Operates at binary level. &, |, ^, ~, (CHECK LATER)
 * 6. Ternary Operator: A shorthand for if-else. condition ? ifTrueStatement : ifFalseStatement
 * 7. Type Operator: Check data type : typeOf, instanceOf.
 * 8. String Operator: concatenate (+) / add and assign (+=)
 *
 *
 *
 * Data types:
 * ==> Primitive data types: Immutable values.
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
 * Functions:
 * 1. A block of reusable code designed to perform a specific task.
 * 2. It can be executed whenever evoked and can be called as many as required times.
 * 3. When compiler reads a function, it doesn't imminently execute the function. It first stores in into the memory and when the function is invoked , then it executes the function.
 * 4. Functions themselves are Object.
 *
 * Types of function:
 * 1. Function declaration: A function is defined using the function keyword, followed by a name and parentheses.
 * 2. Function expression: A function can also be assigned to a variable. Such functions are anonymous (they have no name).
 * 3. Arrow function: A shorter syntax for writing functions, using the => arrow.
 * 4. Immediately invoked function expression (IIFE) : Functions that are executed as soon as they are defined.
 * 5. Higher-Order function: Functions that accept other functions as arguments or return functions.
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
 * 1. Allows a JS function to accept an indefinite numbers of argument as an array.
 * 2. This is useful when we don't know how many arguments a function will receive.
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
 * 1. Implicit Type conversion (Type coercion) : Automatically converts data types when performing operations.
 * 2. Explicit Type conversion (Type casting) : We manually convert data types using specific methods.
 *
 *
 */

/**
 *
 * Hoisting : A JS mechanism where variables and functions declarations are moved to the top of their scope before code execution.
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
 * 2. Widely used in asynchronous programming , event handling and higher order functions.
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
 * Arrays & Iterables :
 * 1. Iterables : An object that can be looped over using for-of loop.
 *
 * Types of iterables :
 * 1. Arrays.
 * 2. Strings.
 * 3. Maps.
 * 4. Sets.
 *
 * What "array like Objects" ?
 * 1. Objects that have lenght property and use indexes to access items.
 * 2. Not every "Array like Object" is an Array.Arrays has some etra properties.
 * 3.
 *
 *
 * Array :
 * 1. Ordered collection of values, which can be of any type.
 * 2. Zero based indexing.
 *
 *
 */

const nameList = ["Tarun", "Hope", "Priya"];

console.log(nameList);
//const numberList = new Array(5); // creates an empty array with lenght 5 instead of an array with '5' as a single value.
const numberList = new Array(
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    1,
    1,
    2,
    4,
    23,
    4242,
    4324,
    43
);
console.log(numberList);

// Array Methods :
// Push : Add value to the end

numberList.push(9);

// pop() : Remove the last element

numberList.pop();

// unshift() : Add value to the start

numberList.unshift(9);

// shift() : remove first element.

numberList.shift();

// Splice() : Methods used to add, remove, or replace elements in an array.
// It modifies the original array and returns an array with removed elements.
// syntex : array.splice(startIndex, deleteCount, item1, item2,....);
// If used -index it will start from the last element.

const removedNumberList = numberList.splice(10, 15);
console.log(removedNumberList);

// slice() : Method used to extract a portion of an array without modifying original array.
// syntex : array.slice(startIndex,endIndex);
// -index starts from the end.

const sliceNumberList = numberList.slice(1, 9);
console.log(sliceNumberList);

// Iterating array

// 1. For loop

for (let i = 0; i < numberList.length; i++) {
    console.log(numberList[i]);
}

// 2. forEach() function : Execute a function for each element.

numberList.forEach((num) => {
    console.log(num * 10);
});

// 3. for..of loop (best for iterables

for (let num of numberList) {
    console.log(num * 5);
}

// 4. map() : Returns a new array as per the function passes.

const newNumberList = numberList.map((num) => (num % 2 !== 0 ? num : ""));
console.log(newNumberList);

// concat() : Merge two or more arrays into a new array.
// Doesn't modify the origianl arrays , but retursn a new combined array.

const concatNumberList = removedNumberList.concat(newNumberList);
console.log(concatNumberList);

// indexOf() : Returns the index of the element passed in the function
// Returns the index of first matching value.
// returns -1 if no item is found.

console.log(concatNumberList.indexOf(1)); // returns the index of first matching element.
console.log(concatNumberList.lastIndexOf(1)); // returns the index of last matching elements.

// find() : method used to search an array.
// It returns the first element that satisfies a provided testing function.
// It stops searching as soon as it finds a match.

const greaterNumber = concatNumberList.find((num, index) => {
    return num > 20;
});

console.log(greaterNumber);

console.log(concatNumberList.findIndex((num, index) => num > 25)); // return the index of first item matched element.

/**
 *
 * Classes & Object Oriented Programming :
 *
 */

class Product {
    // this is Product class i.e a blue print for the product object.
    // properties are declared below
    title;
    description;
    price;
    status;
    constructor(title, description, price, status) {
        // this is a constructor function and product information will be passed to it when object is created
        // constructor will assign the values to the variables.
        this.title = title;
        this.description = description;
        this.price = price;
        this.status = status;
    }
}

class Cart {
    product;
    constructor(product) {
        this.product = this.product;
    }
}

class CartItems {
    items = [
        new Cart({
            productOne: {
                title: "CART PRODUCT",
                description: "CART DESCRIPTION",
                price: 100,
                status: "Available",
            },
        }),
    ];

    render() {
        console.log(this.items);
    }
}

class ProductCard {
    // This is Product Card , resposible for handling indivisual product card.
    // isolated from other cards.
    constructor(product) {
        // When this card is initialized it must recieve the product info.
        this.product = product;
    }
    addToCart() {
        // Add to cart logic here
        console.log("Adding Product to card");
        console.log(this.product);
    }
    viewProduct() {
        console.log("View Product");
        console.log(this.product);
    }
    render() {
        //This method responsible for instanciate , create and return the card.
        const pCard = document.createElement("div"); // creating a new element.
        pCard.classList.add(
            // adding classes to the element
            "flex",
            "flex-col",
            "justify-center",
            "relative",
            "group",
            "overflow-hidden"
        );
        // adding inner card structure to newly created elemment.
        pCard.innerHTML = `
            <img
              src="https://loremflickr.com/500/800"
              class="max-w-full h-auto"
            />
            <div
              class="flex flex-col justify-center align-middle bg-black absolute -bottom-10 opacity-0 w-full text-white px-2 py-3 group-hover:opacity-70 group-hover:bottom-0 transition-all duration-700 ease-in-out"
            >
              <h3 class="text-lg">${this.product.title}</h3>
              <p class="text-sm">${this.product.description}</p>
              <div class="flex justify-evenly mt-1">
                <button
                  class="bg-green-400 w-full p-2 hover:cursor-pointer hover:bg-green-500 view-product"
                >
                  View
                </button>
                <button
                  class="bg-yellow-400 w-full p-2 hover:cursor-pointer hover:bg-yellow-500 add-to-cart"
                >
                  Add to cart
                </button>
              </div>
            </div>`;
        const addToCart = pCard.querySelector(".add-to-cart"); // This will be isolated from other cards.
        const viewProduct = pCard.querySelector(".view-product"); // Isolated fomr other cards.

        //The bind() method in JavaScript is used to explicitly set the value of 'this' inside a function.
        //This solves issues where 'this' loses its intended reference, especially in event handlers, callbacks, and object methods assigned to variables.

        //addToCart.addEventListener("click", this.addToCart); // Here 'this' has lost its intended reference , it is now refering to the 'addToCard' button's 'this'.
        addToCart.addEventListener("click", this.addToCart.bind(this));
        //'this' now is refering to the 'product' object.

        viewProduct.addEventListener("click", this.viewProduct.bind(this));
        return pCard; // returning the element.
    }
}

class ProductList {
    // Final class where all of the classes are coming togeather to do stuff.
    products = [
        // Creating array , using the Product class.
        // Passing products information to the class to create objects.
        new Product("Product A", "This is Product A", 100, "Available"),
        new Product("Product B", "This is product B", 200, "Out of stock"),
        new Product("Product C", "This is product C", 200, "Available"),
    ];
    productCard;
    constructor() {
        // Automatically initialized
    }

    render() {
        // Responsible for rendring the final products list.
        const productBox = document.getElementById("product-box");
        this.products.forEach((product) => {
            // looping through the products array.
            this.productCard = new ProductCard(product);
            // console.log(this.productCard.render());
            productBox.append(this.productCard.render());
        });
    }
}

productList = new ProductList();
productList.render();

cartItems = new CartItems();
cartItems.render();

/**
 *
 *
 * ***********************************************************************************************************************************************
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
// forEach is a higher order array function which accepts another functionn as an argument and return the values as per the function.
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
// Also hoisted(moved to the top of the script) but not initialized // can't call the function before its declaration.
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
 * filter() : A JS method which returns an array with the elements that pass a condition given in the callback function.
 *
 * trim() : A JS method to remove whitespaces from both ends of the string but doesn't modify the string.
 *
 * map() : A JS method to create a new array by applying a function to each element of the original array.
 *
 */
const txtOptions = document.getElementById("txtOptions");
const listOptions = document.getElementById("listOptions");

txtOptions.addEventListener("keyup", (e) => {
    // adding an event listner to the textarea
    createOptions(e.target.value); // Calling a function and passing the input value
    if (e.key === "Enter") {
        // setTimeout() : Method used to execute a function after a specified delay.
        setTimeout(() => {
            e.target.value = ""; // set the input to ''
        }, 10);
        randomSelectOption(); // can function to highlight and select a random element.
    }
});

function createOptions(input) {
    // function to perform the desired action
    // 1.  split the input when user enters ','.
    const options = input.split(",");
    //console.log(choices);
    // 2. return only those entries which are not empty.
    const optionsAfterFilter = options.filter((option) => option.trim() !== "");
    //console.log(afterFilter);
    // 3. Map entire array and remove any whitespaces from the element
    const optionsAfterMap = optionsAfterFilter.map((option) => option.trim());
    console.log(optionsAfterMap);
    listOptions.innerHTML = "";

    // loop through 'finalArray and display them as options'.

    optionsAfterMap.forEach((choice) => {
        // loop throught each element of the array and performs the desired action.

        const option = document.createElement("span"); // creating a new 'span' element.
        option.classList.add(
            "bg-orange-400",
            "px-2",
            "rounded-full",
            "text-white",
            "cursor-pointer",
            "options",
            "min-w-20",
            "text-center"
        ); // adding classes to the newly created span element.
        option.innerText = choice; // Adding text to the newly created span element.
        listOptions.appendChild(option); // Appending the newly created span element to the 'listOption' div.
        /**
         * Use appendChild() if adding one element.
         * Use append() if adding multiple elements or text.
         * Use prepend() to add elements at the beginning.
         * Use insertBefore() for precise placement before another element.
         * Use replaceChild() to replace an existing child.
         * Use removeChild() or remove() to delete elements.
         */
    });
}

// Highlighting and selecting a random option.

/**
 *
 * setIntervel() : Runs a function repeatedly with a fixed time interval between each execution.
 *
 * syntex : setInterval(()=> { action }, intervel in millisec,args.. )
 * 1. It returns an ID of the setInterval , which can be used to stop the interval using clearInterval();
 *
 */

/**
 *
 * setTimeout() : Execute a function once after a specified intervel.
 *
 * syntex : setTimeout(() => { action }, interval in ms, argument)
 * 1. Function will be executed once.
 *
 */

const randomSelectOption = () => {
    const times = 30;
    // Setting the interval to highlight the options randomly.
    const intervel = setInterval(() => {
        // storing the ID to a variable to use later to stop the intervel.
        const randomTag = pickRandomTag(); // calling a function to pick a random option.
        highlightTag(randomTag); // highlighting / changing the background color of the selected option.
        setTimeout(() => {
            unhighlightTag(randomTag);
        }, 100);
    }, 100);

    setTimeout(() => {
        // outer timeout is stopping the interval after give seconds.
        clearInterval(intervel); // stopping the setIntervel function.
        setTimeout(() => {
            // inner timeout to run the function once to select a random option.
            const randomTag = pickRandomTag(); // Picking a random tag.
            highlightTag(randomTag); // highlightin the tag.
        }, 100);
    }, times * 100);
};

function pickRandomTag() {
    // select all generated options.
    const tags = document.querySelectorAll(".options");
    // select a random tag form the tags array.
    return tags[Math.floor(Math.random() * tags.length)]; // Using Math.random() function.
}

function highlightTag(tag) {
    // Add / remove the classes to highlight the option.
    tag.classList.remove("bg-orange-400");
    tag.classList.add("bg-emerald-300");
}
function unhighlightTag(tag) {
    // Add / remove the classes to unhighlight the option.
    tag.classList.remove("bg-emerald-300");
    tag.classList.add("bg-orange-400");
}

// 06. Toggle menu
// get the elements of the menu :
const menuToggle = document.getElementById("menu_toggle");
const menuList = document.getElementById("menu_list");

// add event listner to the menuToggle button
menuToggle.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
    if (menuList.classList.contains("hidden")) {
        menuToggle.innerHTML = "";
        menuToggle.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuToggle.innerHTML = "";
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// 07. Counter app

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    counter.innerHTML = 0;
    const updateCounter = () => {
        // A function to update the counter
        // The data-counter attribute is defined in an HTML element.
        // <h2 class="text-5xl counter" data-counter="5000">5000</h2>
        // JavaScript's getAttribute("data-counter") retrieves the value of this attribute as a string.
        const target = +counter.getAttribute("data-counter"); // A special html feater "date-*" is used to get the target counter value.
        const incBy = target / 200;
        const currentCounter = +counter.innerHTML;
        if (currentCounter < target) {
            counter.innerHTML = `${Math.ceil(currentCounter + incBy)}`;
            setTimeout(updateCounter, 1);
        }
    };

    updateCounter();
});

/**
 *
 * 07. Drink Your Water
 *
 */

// set all cups

const cupBox = document.getElementById("cupBox");
const bottle = document.getElementById("bottle-inner");
const bottleAmount = document.getElementById("bottle-amount");

// Creating the cups using JS createElement function.
for (let i = 0; i < 8; i++) {
    // Looping 8 times to create 8 cups.
    const cup = document.createElement("div");
    cup.classList.add(
        "border-4",
        "w-30",
        "h-50",
        "bg-blue-100",
        "font-bold",
        "text-center",
        "border-black",
        "rounded-b-4xl",
        "flex",
        "flex-col",
        "justify-center",
        "hover:cursor-pointer",
        "cup"
    );
    cup.innerText = `+250ml`;
    // Appending to the parent DIV.
    cupBox.appendChild(cup);
}

const cups = document.querySelectorAll(".cup"); // Accessing the newly appended child elemnts using querySelectorAll.

cups.forEach((cup, idx) => {
    console.log(idx);
    cup.addEventListener("click", () => {
        console.log(idx);
        cups.forEach((cup, i) => {
            if (i <= idx) {
                cup.classList.remove("bg-blue-100");
                cup.classList.add("text-white");
                cup.classList.add("bg-blue-500");
                cup.classList.add("full");
            } else {
                cup.classList.add("bg-blue-100");
                cup.classList.remove("text-white");
                cup.classList.remove("bg-blue-500");
                cup.classList.remove("full");
            }
        });
        fillBottle(idx);
    });
});

const fillBottle = (i) => {
    const totalCups = cups.length;
    const filledCups = document.querySelectorAll(".full").length;
    const height = (filledCups / totalCups) * 100;
    const amount = 250 * (i + 1);
    bottle.style.height = `${height}%`;
    bottleAmount.innerText = `${amount}ml`;
};
fillBottle(-1);

// 08. Movies info using API fetch

const userCard = document.getElementById("user-cards");

const APP_API_KEY =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTU4MzQ0YWJkMTRlN2E3ZDI3MjAwOGJiMzU3YThhYiIsIm5iZiI6MTczNDk0OTI1MC40NjIwMDAxLCJzdWIiOiI2NzY5Mzk4MmM5ZGU5NGQ3MzcwYjA5YzYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dwcVcVn01SihpRYP47D04uWz7T8WzR0Hy7dlUpuhQ5o";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

const link = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;

var movies = [];

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `${APP_API_KEY}`,
    },
};

async function fetchMovies() {
    const response = await fetch(link, options);
    const data = await response.json();
    movies = data.results;
    movies.forEach((movie) => {
        userCard.innerHTML += `<div class="group border-1 flex-col relative hover:cursor-pointer">
          <img
            src="${IMG_URL + movie.poster_path}"
            class="max-w-full h-auto"
          />
          <div
            class="absolute bottom-[-10px] opacity-0 px-3 py-2 bg-black text-white w-full group-hover:bottom-0 group-hover:opacity-70 transition-all duration-900"
          >
            <div>
            <div  class="flex justify-between"><h3 class="text-sm">Title : ${
            movie.original_title
        }
    </h3>
    <span class="text-sm bg-amber-400 rounded-lg text-white px-2">${
            movie.vote_average
        }</span></div>
              
              <p class="text-xs pb-2">
                <b>Overview</b> : ${movie.overview}
              </p>
            </div>
            <div class="flex justify-evenly">
              <button
                class="bg-green-400 w-full hover:cursor-pointer hover:bg-green-500"
              >
                <i class="far fa-eye"></i>
              </button>
              <button
                class="bg-yellow-400 w-full hover:cursor-pointer hover:bg-yellow-500"
              >
                <i class="fas fa-user-alt"></i>
              </button>
            </div>
          </div>
        </div>`;
    });
}
fetchMovies();

//Fetch API  using async & await
