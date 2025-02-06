// START :: Base functionality classes which can be extended where every required

class CreateComponent{
    constructor() {
    }
    createRootElement(tag, cssClasses = "", attributes = {}) {
        // Create new element
        const createTagElement = document.createElement(tag);

        // Apply CSS classes if provided
        if (cssClasses) {
            createTagElement.className = cssClasses;
        }

        // Set attributes
        for (const key in attributes) {
            if (attributes.hasOwnProperty(key)) {
                createTagElement.setAttribute(key, attributes[key]);
            }
        }
        return createTagElement;
    }
}

// END :: Base functionality classes which can be extended where every required


// Navbar : Date & Time
const dateTime = document.getElementById('date_time');
function dispDateTime(){
    const now = new Date().toLocaleString('en-US',  {timeZone: 'Asia/Kolkata'});
    const date = new Date(now);
    const month = date.toLocaleString('en-US', {month: 'short'});
    const day = date.getDate().toString().padStart(2,'0');
    const hours = date.getHours().toString().padStart(2,'0');
    const minutes = date.getMinutes().toString().padStart(2,'0');
    return `${month} ${day} ${hours}:${minutes}`;
}

dateTime.innerText = dispDateTime(); // Initial date & time
// Update Date & Time every minutes

setInterval(() => {
    dateTime.innerText = dispDateTime();
}, 10000);

// Sidebar : Games
const iconGame = document.getElementById('icon-game');
const groupGame = document.getElementById('group-game');
iconGame.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("games clicked");
    if(groupGame.classList.contains('opacity-0')){
        groupGame.classList.remove('opacity-0');
        groupGame.classList.add('opacity-100');
    }else{
        groupGame.classList.remove('opacity-100');
        groupGame.classList.add('opacity-0');
    }
});


// Start Ubuntu

const startUbuntu = document.getElementById('startUbuntu');
const ubuntuMenuBox = document.getElementById('ubuntuMenuBox');
startUbuntu.addEventListener('click', (e) => {
    e.preventDefault();
    if(ubuntuMenuBox.classList.contains('opacity-0')){
        ubuntuMenuBox.classList.remove('opacity-0','h-1','w-1','-z-10');
        ubuntuMenuBox.classList.add('opacity-100','h-9/10','md:h-3/4','w-9/10','md:w-3/4');
    }else{
        ubuntuMenuBox.classList.add('opacity-0','h-1','w-1','-z-10');
        ubuntuMenuBox.classList.remove('opacity-100', 'h-9/10','md:h-3/4','w-9/10','md:w-3/4');
    }
})

// Ubuntu Start Installed Apps List




// Ubuntu Store Apps List

// Defining an App object with its properties & methods


// Class for the App Card , responsible to display a single product.

// Toggle App Store

const appToggle = document.getElementById('appToggle');
const appStore = document.getElementById('appStore');
const btnAppStoreMinimize = document.getElementById('btnAppStoreMinimize');
const btnAppStoreMaximize = document.getElementById('btnAppStoreMaximize');
const btnAppStoreClose = document.getElementById('btnAppStoreClose');

appToggle.addEventListener('click', () => {
    appStore.classList.toggle('hidden');
});

btnAppStoreMinimize.addEventListener('click', () => {
    appStore.classList.add('hidden');
})
btnAppStoreMaximize.addEventListener('click', () => {
    if(appStore.classList.contains('top-0') && appStore.classList.contains('left-0')){
        appStore.style.top= '50%';
        appStore.style.left= '50%';
        appStore.classList.remove("absolute","top-0","left-0","h-full","w-full");
        appStore.classList.add("absolute","top-1/2","left-1/2","transform","-translate-x-1/2","-translate-y-1/2","h-3/4","w-3/4","rounded-xl","opacity-100");
    }else{
        appStore.style.top= '0';
        appStore.style.left= '0';
        appStore.classList.remove("absolute","top-1/2","left-1/2","transform","-translate-x-1/2","-translate-y-1/2","h-3/4","w-3/4","rounded-xl","opacity-100");
        appStore.classList.add("absolute","top-0","left-0","h-full","w-full");
    }

})
btnAppStoreClose.addEventListener('click', () => {
    appStore.classList.add('hidden');
});

// Class App : A blueprint for the App object.
class AppBlueprint{
    // Defining class properties
    title;
    company;
    description;
    status;
    installed;
    rating;
    image;
    link;
    constructor(title,company,link,description,status,installed,rating,image) {
        // Constructor to set the properties values based on value passed when this class is initialized.
        this.title = title;
        this.company = company;
        this.link = link;
        this.description = description;
        this.status = status;
        this.installed = installed;
        this.rating = rating;
        this.image = image;
    }
}

// App store App card class : responsible to display individual app.
class AppCard extends CreateComponent{
    constructor(app) {
        super();
        this.app = app;
    }
    render(){
        const card = this.createRootElement('div','flex bg-white p-2 border-1 border-gray-400 rounded-2xl min-h-32 gap-1 shadow-sm hover:cursor-pointer');
        card.innerHTML =`<img src="./assets/images/${this.app.image}" alt="" srcset="" class="flex-2 w-[75px] h-[75px]">
                         <div class="flex flex-col flex-10 text-black w-full px-2;">
                             <h3 class="text-md">${this.app.title}</h3>
                             <a href="${this.app.link}" target="_blank" class="text-xs text-gray-400 hover:cursor-pointer hover:text-gray-600">${this.app.company}</a>
                             <p class="text-xs">${this.app.description}</p>
                             <span>${this.app.rating} <i class="far fa-star"></i></span>
                             <button class="border-1 border-gray-400 w-full mt-auto ${this.app.installed ? 'hover:bg-red-700' : 'hover:bg-green-700'} rounded-sm hover:text-white hover:cursor-pointer">${this.app.installed ? 'Installed' : 'Install'}</button>
                         </div>`;
        const btnAppInstall = card.querySelector('button');
        /**
         *
         * Data Attributes :
         * 1. The data-* attributes allow us to store custom data inside HTML elements.
         * 2. These attributes can be read and modified using JavaScript, making them useful for passing
         * information without affecting standard attributes.
         *
         * Defining the data set.
         * 1. You can define a custom data attribute using the data- prefix in HTML.
         *
         * Accessing the data-* attributes using:
         * 1. getAttribute() – Standard way to fetch attributes. i.e  abc.getAttribute('data-sample-text');
         * 2. dataset property – Shorter syntax for data-* attributes. console.log(abc.dataset.sampleText);
         *
         */
        card.dataset.rating = this.app.rating;
        btnAppInstall.onmouseover = () => (this.app.installed ? btnAppInstall.innerText = "Uninstall": '');
        btnAppInstall.onmouseout = () => (this.app.installed ? btnAppInstall.innerText = "Installed" : '');
        btnAppInstall.addEventListener('click', this.installApp.bind(this)); // Using 'bind' function to set the context for event Listner function
        return card;
    }
    // Install Application function
    installApp() {
        // 'this' keyword here will lose its context , so to set the context we'll use bind here
        console.log(this.app);
        this.app.installed = !this.app.installed;
    }
    // Uninstall Application function
    uninstallApp(){
        console.log(this.app);
    }
}

// AppsList class : Responsible to hold all data and rending the Apps related lists.
class AppsList extends CreateComponent{
    apps = [
        new AppBlueprint('WhatsAppBlueprint','Meta','https://www.whatsapp.com/','A messaging app that allows users to send text, voice, video calls, and files. The desktop version syncs with the mobile app for seamless communication.',true,false,4.5,'whatsapp.png'),
        new AppBlueprint('Spotify','Spotify Technology S.A.','https://www.spotify.com/',' A leading music streaming service offering millions of songs, podcasts, and playlists with both free and premium options.',true,true,4.5,'spotify.png'),
        new AppBlueprint('Firefox','Mozilla Foundation','https://www.mozilla.org/firefox/',' A privacy-focused, open-source web browser known for speed, security, and customization with a wide range of add-ons.',true,false,4.5,'firefox.png'),
        new AppBlueprint('Google Chrome','Google LLC','https://www.google.com/chrome/','A fast, user-friendly web browser offering seamless synchronization with Google services and a vast library of extensions.',true,true,5, 'chrome.png'),
        new AppBlueprint('LibraOffice','The Document Foundation','https://www.libreoffice.org/','A comprehensive, free office suite offering word processing, spreadsheets, presentations, and more, serving as a robust alternative to Microsoft Office.',true,true,4,'libraoffice.png'),
    ];


    // Ubuntu Start installed apps
    renderInstalledApps(){
        const ubuntuStartInstalledApps = document.getElementById('ubuntuStartInstalledApps');
        // Using a function from the parent class to create a new element.
        const installedAppsList = this.createRootElement('li','grid grid-cols-5 grid-rows-auto list-none');
        this.apps.forEach((app) => {
            app.installed && app.status ?
            installedAppsList.innerHTML += `<li class="group hover:cursor-pointer opacity-80 hover:opacity-90">
                                    <div class="flex flex-col justify-between items-center">
                                        <img src="/assets/images/${app.image}" alt="" srcset="" class="h-[80px] w-[80px] object-cover">
                                        <span>${app.title}</span>
                                    </div>
                                </li>`
                : ``;
        });
        ubuntuStartInstalledApps.appendChild(installedAppsList);
    }

    // Ubuntu Apps center Apps list
    renderStoreApps(){
        // function responsible to render the list on the page.
        const ubuntuAppsList = document.getElementById('ubuntuAppsList');
        // Using a parent class's function to crate a new element
        const appCard = this.createRootElement('div','grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2');
        this.apps.forEach((app) => {
            appCard.append(new AppCard(app).render());
        });
        ubuntuAppsList.appendChild(appCard);
    }

    renderSidebarApps(){
        const sidebarAppsList = document.getElementById('sidebarAppsList');
    }

     // Method to render HTML related to Apps.
    render(){
        // All rending of apps are done here.
        this.renderStoreApps();
        this.renderInstalledApps();
        this.renderSidebarApps();
    }
}

/**
 *
 * Static Methods & Properties :
 * 1. Static properties and methods belong to a class itself rather than instances of the class.
 * 2. This means they can be accessed without creating an object of the class.
 *  LEARN MORE ON THIS LATER ......
 */

class App{
    static init(){
        const apps = new AppsList();
        apps.render();
    }
}

// Instantiating the App

App.init();

/**
 * Getter & Setter :
 * 1. In JavaScript, getters (get) and setters (set) allow you to control how object properties are accessed and modified.
 * 2. They are used inside classes and objects to encapsulate logic when getting or setting values.
 * Why use Getter & Setter ?
 * ✅ Encapsulate complex logic when retrieving or modifying a property.
 * ✅ Prevent direct access to sensitive properties.
 * ✅ Automatically compute values instead of storing them.
 * ✅ Improve code maintainability by centralizing logic.
 *
 *
 *
 * Inheritance :
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

const btnPrevious = document.getElementById('btnPrevious');
const btnNext = document.getElementById('btnNext');
const appStoreSlider = document.getElementById('appStoreSlider');
let currentIndex = 0;
// Updating slides function
function updateSlide(){
    appStoreSlider.style.transform = `translateX(-${100*currentIndex}%)`;
}
// Click on previous button
btnPrevious.addEventListener('click',  ()=> {
    clearInterval(autoSlide)
    currentIndex = (currentIndex - 1 + appStoreSlider.childElementCount) % appStoreSlider.childElementCount;
    updateSlide();
});
// Click on next button
btnNext.addEventListener('click',()=>{
    clearInterval(autoSlide);
    currentIndex = ((currentIndex + 1) % appStoreSlider.childElementCount) ? currentIndex + 1 : 0;
    updateSlide();
});
// Automatic scrolling : using setInterval method
const autoSlide = setInterval(()=>{
    currentIndex = (currentIndex + 1) % appStoreSlider.childElementCount;
    updateSlide();
}, 4000);


// Making App store draggable

// set initial positions & draggable
let offsetX = 0;
let offsetY = 0;
let draggable = false;
appStore.addEventListener("mousedown", (event) => {
    draggable = true;
    offsetX = event.clientX - appStore.getBoundingClientRect().left;
    offsetY = event.clientY - appStore.getBoundingClientRect().top;
    appStore.style.cursor = "grabbing";
});
// Move the div with the mouse
document.addEventListener("mousemove", (event) => {
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