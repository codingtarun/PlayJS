export class Navbar{
    constructor() {
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
        this.dateTime = document.getElementById('date_time');
        console.log("Navbar Class");
    }
    generateDateTime(){
        // Generating current date & time.
        const now = new Date().toLocaleString('en-US',  {timeZone: 'Asia/Kolkata'});
        const date = new Date(now);
        const month = date.toLocaleString('en-US', {month: 'short'});
        const day = date.getDate().toString().padStart(2,'0');
        const hours = date.getHours().toString().padStart(2,'0');
        const minutes = date.getMinutes().toString().padStart(2,'0');
        return `${month} ${day} ${hours}:${minutes}`;
    }
    injectDateTime(){
        // Injecting current date & time into the `dateTime` DOM element.
        this.dateTime.innerText = this.generateDateTime(); // Initial date & time
        // Updating Date & Time every 10 seconds
        setInterval(() => {
            this.dateTime.innerText = this.generateDateTime(); // callback function or action
        }, 10000);
    }
    render(){
        // Responsible for bootstrapping the class & its methods.
        this.injectDateTime();
    }
}