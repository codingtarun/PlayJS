import {CreateHtmlElement} from "../helper/CreateHtmlElement.js";
import {Application} from "../blueprints/Application.js";
import {ApplicationCard} from "./ApplicationCard.js";
import {ubuntuApplicationList} from "../data/ubuntu_application_list.js";
import {CheckImageExists} from "../helper/CheckImageExists.js";

export class ApplicationList{
    apps = [];
    constructor() {
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

    }

    // Ubuntu Start installed apps
    renderInstalledApps(){

        const categories = [...new Set(ubuntuApplicationList.map(app => app.category))];

        console.log(categories);

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
            CheckImageExists.check(app.image).then(img => {
                document.getElementById(`img-${app.title}`).src = img;
            });
        });

        ubuntuStartInstalledApps.appendChild(installedAppsList);
    }

    // Ubuntu Apps center Apps list
    renderStoreApps(){
        // function responsible to render the list on the page.
        const ubuntuAppsList = document.getElementById('ubuntuAppsList');
        // Using a parent class's function to crate a new element
        const appCard = CreateHtmlElement.createRootElement('div','grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2');
        this.apps.forEach((app) => {
            appCard.append(new ApplicationCard(app).render());
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
