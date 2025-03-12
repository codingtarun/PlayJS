import {Sidebar} from "./components/Sidebar.js";
import {ApplicationList} from "./components/ApplicationList.js";
import {ApplicationStoreSlider} from "./components/ApplicationStoreSlider.js";
import {Navbar} from "./components/Navbar.js";
import {Login} from "./components/Login.js";
import {Popup} from "./components/Popup.js";

/**
 *
 * Static Methods & Properties:
 * 1. Static properties and methods belong to a class itself rather than instances of the class.
 * 2. This means they can be accessed without creating an object of the class.
 *  LEARN MORE ON THIS LATER ......
 */

class App{
    static init(){
        new Popup().render();
        new ApplicationList().render();
        new Navbar().render();
        new Sidebar().render();
        new ApplicationStoreSlider().render();
        new Login().render();

    }
}
App.init();

/**
 * Getter & Setter:
 * 1. In JavaScript, getters (get) and setters (set) allow you to control how object properties are accessed and modified.
 * 2. They are used inside classes and objects to encapsulate logic when getting or setting values.
 * Why use Getter & Setter?
 * ✅ Encapsulate complex logic when retrieving or modifying a property.
 * ✅ Prevent direct access to sensitive properties.
 * ✅ Automatically compute values instead of storing them.
 * ✅ Improve code maintainability by centralizing logic.
 *
 *
 *
 * Inheritance:
 * 1. Inheritance allows one class (child) to inherit properties and methods from another class (parent).
 * 2. This helps in code reusability and structuring large applications efficiently.
 *
 * 🔹 Why Use Inheritance?
 * ✅ Reusability – Avoid duplicating common methods in multiple classes.
 * ✅ Code Organization – Keep functionality modular and structured.
 * ✅ Extensibility – Allow child classes to override parent methods.
 *
 *
 */


// App store slider

/**
 *
 * Handling Events:
 * Events in JS are actions or occurrences like click, keypress, mouse over scroll etc ,
 * that can be detected and handled using event listeners.
 *
 *Some common example:
 * 1. click
 * 2. mouseover/mouseout
 * 3. keydown/keyup
 * 4, load: when page is fully loaded.
 * 4. submit: when a form is submitted.
 *
 *
 * We can also remove event listener.
 *
 * btn.removeEventListener('click', callback function ());
 *
 *
 *
 */

// Making App store draggable

// set initial positions & draggable
let offsetX = 0;
let offsetY = 0;
let draggable = false;
const appStore = document.getElementById('appStore');
appStore.addEventListener("dragstart", (event) => {
    draggable = true;
    offsetX = event.clientX - appStore.getBoundingClientRect().left;
    offsetY = event.clientY - appStore.getBoundingClientRect().top;
    appStore.style.cursor = "grabbing";
});
// Move the div with the mouse
document.addEventListener("dragend", (event) => {
    if (!draggable) return;

    appStore.style.left = `${event.clientX - offsetX}px`;
    appStore.style.top = `${event.clientY - offsetY}px`;
    appStore.classList.remove('transform','-translate-x-1/2','-translate-y-1/2');
});

// When mouse is released
document.addEventListener("mouseup", () => {
    draggable = false;
    appStore.style.cursor = "grab";
});


/**
 *
 *  Ubuntu Menu Search bar
 *
 *
 */

const ubuntuMenuBoxSearchBar = document.getElementById('ubuntuMenuBoxSearchBar');
ubuntuMenuBoxSearchBar.addEventListener('keyup', (e) => {
    console.log(e.target.value);
})


/**
 *
 * Pure functions:
 * 1. A function which always returns the same output for the same input.
 * 2. Has no side effect i.e., doesn't modify external variables, DOM, global state.
 * 3. Always try to make Pure Function as much as possible for a bug-free code.
 *
 * Impure function:
 * 1. A function whose output can't be predicted, even for the same input.
 * 2. A function which affects the external variables, etc. i.e., side effect.
 * 3.
 *
 * Examples:
 * 1. Adding some extra info to an existing array.
 * 2. Assigning / updating value to an existing variable.
 */


// Pure function
function pureFunction(a,b){
    return a+b ;
}

console.log(pureFunction(1,3)); // Same inputs will always produce the same results.


// Impure function
let aRandomNumber = 0;
function impureFunction(a){
    const randomNum =  Math.random(a * 100); // return a ransom number
    aRandomNumber = randomNum; // External variable is effected i.e side effect
    return randomNum;
}

console.log(impureFunction(20)); // Different outputs for the same input.

/**
 *
 * Factory function:
 * 1. A function that returns a new object every time its called.
 * 2. Acts as a 'factory' producing instances without using 'news' or 'class'.
 *
 *
 *
 */

function factoryFunction(name){
    function greetUser(job){ // function inside a function.
        return `Hello ${name} , are you a ${job} ? `;
    }
    return greetUser;
}

const factoryFunctionObj = factoryFunction('Tarun Chauhan'); // An object will be returned and stored to variable.

console.log(factoryFunctionObj("Software Engineer")); // While executing the object required argument is passed to it.

/**
 *
 * Closure function:
 * 1. A function that remembers the variables from its outer scope,even after the outer function has finished executing.
 * 2. Used for data encapsulation, function factories, and private variables.
 *
 */

function outerFunction (name){
    return function innerFunction(msg){
        console.log(`Hello, ${name}, ${msg}`);
    }
}

const outerFunctionObj = outerFunction('Tarun Chauhan'); // Outer function is called , it returns an object of inner function
outerFunctionObj("How are you?");
outerFunctionObj("Do you want to eat something?");

/**
 * Closure with private variables:
 * 1. It helps in creating private variables by keeping them hidden from the outside world.
 * 2. Encapsulation makes 'counter' safe from accidental modification.
 */

function counterFunction(){
    let counter = 456; // Private variable / can be accessed inside this function only.
    return {
        increment(){
            counter++
            console.log(counter);
        },
        decrement(){
            counter--;
            console.log(counter);
        },
        getCount(){
            console.log(counter);
        }
    };
}
const counterFunctionObj = counterFunction();
counterFunctionObj.increment();
counterFunctionObj.getCount();
counterFunctionObj.decrement();
counterFunctionObj.getCount();


/**
 *
 *
 * Local Storage:
 * 1. Local Storage is a web API that allows you to store key-value pairs in the browser with no expiration time.
 * 2. The data remains stored even after the page is refreshed or the browser is closed.
 * 3. Localstorage only supports string, so we use JSON.stringify() to share objects and JSON.parse() to retrieve them.
 * 4. Data has no expiration.
 * 5. 5MB browser limit per website.
 *
 *
 */

/**
 * Asynchronous JS:
 *
 * 1. JS is a single threaded programing language, i.e., it can execute only one task at a time.
 * 2. Asynchronous programing allows it to handle multiple tasks efficiently without blocking the main thread.
 *
 *
 */

/**
 *
 * setTimeout: built-in function to delay the execution of a function by a specified amount of time.
 *
 */

console.log("A");
 // execution will not be blocked
setTimeout(()=> {
    // This functions works with the help of browser.

}, 2000);
console.log("C");



