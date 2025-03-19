import {CreateHtmlElement} from "../helper/CreateHtmlElement.js";
import {CheckImageExists} from "../helper/CheckImageExists.js";

export class ApplicationCard{
    /**
     *
     * This class is created specifically to create Application card for the App store.
     *
     */
    image;
    constructor(app) {
        /**
         *
         * When object of this class is created, the `app` parameter is passed to it which contains every information about the application
         * for which we are about to create the card.
         *
         */
        this.app = app;
    }
    renderAppStoreApplicationCard(){

        // Create a new HTML element dynamically.
        const card = CreateHtmlElement.createRootElement('div','flex bg-white p-2 border-1 text-left border-gray-200 rounded-md min-h-32 gap-1 shadow-sm hover:cursor-pointer');
        // Once new HTML element is created we'll inject the inner HTML in that element.
        card.innerHTML =`<img src="" alt="" srcset="" class="flex-2 w-[75px] h-[75px]" id="app-image-${this.app.title}">
                         <div class="flex flex-col flex-10 text-black w-full px-2;">
                             <h3 class="text-sm">${this.app.title}</h3>
                             <a href="${this.app.link}" target="_blank" class="text-[10px] text-gray-400 hover:cursor-pointer hover:text-gray-600">${this.app.company}</a>
                             <span class="text-[10px] mb-3"><i class="far fa-star"></i> ${this.app.rating}</span>
                             <p class="text-[11px] mb-2">${this.app.description}</p>
                             <button class="border-1 border-gray-400 text-gray-700 hover:border-gray-100 w-full mt-auto ${this.app.installed ? 'hover:bg-red-700' : 'hover:bg-green-700'} rounded-sm hover:text-white hover:cursor-pointer">${this.app.installed ? 'Installed' : 'Install'}</button>
                         </div>`;
        /**
         *
         * To check if the image exists on the file storage we have create another helper class.
         */

        CheckImageExists.checkImage(this.app.image).then(img => {
            document.getElementById(`app-image-${this.app.title}`).src = img;
        });
        const btnAppInstall = card.querySelector('button');
        /**
         *
         * Data Attributes:
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
     renderStartMenuAppicationCard(){
        // Check if a file exists
         const card = CreateHtmlElement.createRootElement('div','flex bg-white p-2 border-1 text-left border-gray-200 rounded-md min-h-32 gap-1 shadow-sm hover:cursor-pointer');
         card.innerHTML =`<img src="" alt="" srcset="" class="flex-2 w-[75px] h-[75px]" id="app-image-${this.app.title}">
                         <div class="flex flex-col flex-10 text-black w-full px-2;">
                             <h3 class="text-sm">${this.app.title}</h3>
                             <a href="${this.app.link}" target="_blank" class="text-[10px] text-gray-400 hover:cursor-pointer hover:text-gray-600">${this.app.company}</a>
                             <span class="text-[10px] mb-3"><i class="far fa-star"></i> ${this.app.rating}</span>
                             <p class="text-[11px] mb-2">${this.app.description}</p>
                             <button class="border-1 border-gray-400 text-gray-700 hover:border-gray-100 w-full mt-auto ${this.app.installed ? 'hover:bg-red-700' : 'hover:bg-green-700'} rounded-sm hover:text-white hover:cursor-pointer">${this.app.installed ? 'Installed' : 'Install'}</button>
                         </div>`;
         CheckImageExists.check(this.app.image).then(img => {
             document.getElementById(`app-image-${this.app.title}`).src = img;
         });
        const btnAppInstall = card.querySelector('button');
        /**
         *
         * Data Attributes:
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
        //console.log(this.app);
        this.app.installed = !this.app.installed;
    }
    // Uninstall Application function
    uninstallApp(){
        console.log(this.app);
    }
}
