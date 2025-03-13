export class Popup{
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
        this.aboutPopup = document.getElementById('aboutPopup');
        this.aboutPopupClose = document.getElementById('aboutPopupClose');
        console.log("Popup Class");
    }
    fetchData(){
        /**
         *
         * The XMLHttpRequest (XHR) object allows web pages to make asynchronous HTTP requests to a server without reloading the page.
         *
         * Key Properties & Methods
         * 1. xhr.open(method, url, async) → Initializes request.
         * 2. xhr.send(body) → Sends request.
         * 3. xhr.setRequestHeader(header, value) → Sets request headers.
         * 4. xhr.readyState → Tracks request state (4 means "done").
         * 5. xhr.status → HTTP status code (200 = success).
         * 6. xhr.responseText → The response data.
         *
         *  Note: Nowadays, fetch() is preferred over XMLHttpRequest due to its cleaner syntax and support for promises. 🚀
         *
         */
        const xhr = new XMLHttpRequest(); // Initializing the XMLHttpRequest object
        xhr.open('GET','https://jsonplaceholder.typicode.com/posts'); // Setting up the arguments
        xhr.responseType = 'json'; // Setting the response type.
        xhr.onload = function () {
            // What to do when data is loaded
            const data =  xhr.response; // Store response in variable
            let postHtml = '<ol>';
            for(const post of data){ // Loop stored data
                postHtml += `<li>${post.id} : ${post.title}</li>`;
            }
            postHtml += '</ol>';
            document.getElementById('aboutPopupInfo').innerHTML =  postHtml; // Inject the data
        }
        xhr.send();
    }
    renderPopup(){
        if(localStorage.getItem('userData') !== null) {
            // Display Popup
            this.fetchData(); // Injecting the data
            setTimeout(()=>{
                this.aboutPopup.classList.remove('hidden');
                this.aboutPopup.classList.add('flex');
                localStorage.setItem('popupMsg', JSON.stringify(1));
            },2000)
        }
    }
    handleButtonClick(){
        this.aboutPopupClose.addEventListener('click', ()=>{
            this.aboutPopup.classList.remove('flex');
            this.aboutPopup.classList.add('hidden');
        })
    }
    render(){
        this.renderPopup();
        this.handleButtonClick();
    }
}