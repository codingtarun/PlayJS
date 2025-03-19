import {CreateHtmlElement} from "../helper/CreateHtmlElement.js";
import {Application} from "../blueprints/Application.js";
import {ApplicationCard} from "./ApplicationCard.js";
import {ubuntuApplicationList} from "../data/ubuntu_application_list.js";
import {CheckImageExists} from "../helper/CheckImageExists.js";

export class ApplicationList{
    /**
     *
     * A constructor in JavaScript is a special method inside a class
     * that gets called automatically when a new object is created.
     * It is used to initialize properties of the class.
     *
     * Key Points
     * The constructor method runs automatically when an object is created.
     * It initializes the properties (this.name and this.age in the example).
     * You can pass arguments when creating an object (new Person("Alice", 25)).
     *
     */
    apps = []; // Declaring an class scoped empty array which will be used to store the application list.
    constructor() {
        /**
         *
         * Looping through the app list and pushing each item to the 'apps' array using the 'Application' class object.
         *
         */
        ubuntuApplicationList.forEach(app => {
            this.apps.push(new Application(
                app.title,
                app.company,
                app.link,
                app.description,
                app.status,
                app.installed,
                app.rating,
                app.image,
                app.category // Only if Application class supports it
            ));
        });
        //console.log(this.apps);
    }

    // Ubuntu Start installed apps
    renderInstalledApps(){

        const categories = [...new Set(ubuntuApplicationList.map(app => app.category))];

        //console.log(categories);

        const ubuntuStartInstalledApps = document.getElementById('ubuntuStartInstalledApps');
        // Using a function from the parent class to create a new element.
        const installedAppsList = CreateHtmlElement.createRootElement('li','grid grid-cols-5 grid-rows-auto list-none');
        this.apps.forEach((app) => {
            app.installed && app.status ?
                installedAppsList.innerHTML += `<li class="group hover:cursor-pointer opacity-80 hover:opacity-90">
                                    <div class="flex flex-col justify-between items-center">
                                        <img src="" alt="" srcset="" class="h-[80px] w-[80px] object-cover" id="img-${app.title}">
                                        <span>${app.title}</span>
                                    </div>
                                </li>`
                : ``;
            CheckImageExists.checkImage(app.image).then(img => {
                document.getElementById(`img-${app.title}`).src = img;
            });
        });

        ubuntuStartInstalledApps.appendChild(installedAppsList);
    }
    renderSidebarApps(){
        const sidebarAppsList = document.getElementById('sidebarAppsList');
    }

    // Method to render HTML related to Apps.
    render(){
        // All rending of apps are done here.
        this.renderInstalledApps();
        this.renderSidebarApps();
    }
}
