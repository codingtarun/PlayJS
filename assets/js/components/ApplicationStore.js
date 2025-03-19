import {CreateHtmlElement} from "../helper/CreateHtmlElement.js";
import {ubuntuApplicationList} from "../data/ubuntu_application_list.js";
import {Application} from "../blueprints/Application.js";
import {ApplicationCard} from "./ApplicationCard.js";

export class ApplicationStore{
    apps = [];
    constructor(){
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
        this.ubuntuAppsList = document.getElementById('ubuntuAppsList');
        //console.log(this.ubuntuAppsList);
    }
    renderStoreAppList(){
        /**
         *
         * This function is responsible to render the application list
         *
         * We created our own helper function 'CreateHtmlElement' to create a new HTML element dynamically.
         *
         * To create Application Card dynamically, we have created a class `ApplicationCard`.
         *
         */
        const appCard = CreateHtmlElement.createRootElement('div','grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2');
        this.apps.forEach(app => {
            appCard.append(new ApplicationCard(app).renderAppStoreApplicationCard());
        });
        this.ubuntuAppsList.appendChild(appCard);
    }
    render(){
        this.renderStoreAppList();
    }

}