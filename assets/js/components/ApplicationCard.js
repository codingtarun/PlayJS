import {CreateHtmlElement} from "../helper/CreateHtmlElement.js";

export class ApplicationCard extends CreateHtmlElement{
    constructor(app) {
        super();
        this.app = app;
    }
     render(){

        const card = this.createRootElement('div','flex bg-white p-2 border-1 text-left border-gray-400 rounded-2xl min-h-32 gap-1 shadow-sm hover:cursor-pointer');
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
