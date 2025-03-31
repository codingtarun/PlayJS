import {Sidebar} from "./components/Sidebar.js";
import {ApplicationList} from "./components/ApplicationList.js";
import {ApplicationStoreSlider} from "./components/ApplicationStoreSlider.js";
import {Navbar} from "./components/Navbar.js";
import {Login} from "./components/Login.js";
import {Popup} from "./components/Popup.js";
import {ApplicationStore} from "./components/ApplicationStore.js";
import {JavaScriptNotes} from "./components/JavaScriptNotes.js";
import {Mapify} from "./components/Mapify.js";

/**
 *
 * Static Methods & Properties:
 * 1. Static properties and methods belong to a class itself rather than instances of the class.
 * 2. This means they can be accessed without creating an object of the class.
 *  LEARN MORE ON THIS LATER ......
 */

class App{
    /**
     *
     * A static class in JavaScript is a class that only contains static methods and properties.
     * It cannot be instantiated, meaning you cannot create objects from it.
     * Instead, its methods are called directly on the class.
     *
     * Key Points:
     * ✔ No need to create an instance (new ClassName()).
     * ✔ Methods belong to the class, not objects.
     * ✔ Used for utility functions, like validation or calculations.
     *
     */
    static init(){
        //Initializing the components classes here.
        //new Popup().render();
        new ApplicationList().render();
        new ApplicationStore().render();
        new Navbar().render(); // C
        new Sidebar().render();
        new ApplicationStoreSlider().render();
        new Login().render();
        //new JavaScriptNotes().render();
        new Mapify().render();
    }
}

/**
 *
 * Calling a static method from a static class.
 * This is responsible to initialize the entire JS code.
 * (You'll break the app if you remove this code)
 *
 */
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

