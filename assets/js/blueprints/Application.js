export class Application{
    /**
     *
     * Defining a class specifically including the methods and properties of the Ubuntu Applications list.
     *
     */
    title;
    company;
    description;
    status;
    installed;
    rating;
    image;
    link;
    category;
    pin_to_sidebar;

    constructor(title,company,link,description,status,installed,rating,image,category,pin_to_sidebar = false) {
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
        this.title = title;
        this.company = company;
        this.link = link;
        this.description = description;
        this.status = status;
        this.installed = installed;
        this.rating = rating;
        this.image = image;
        this.category = category;
        this.pin_to_sidebar = pin_to_sidebar;
    }
}