export class Mapify{
    constructor(){
        this.mapify = document.getElementById("mapify");
        this.btnMapifyMinimize = document.getElementById('btnMapifyMinimize');
        this.btnMapifyMaximize = document.getElementById('btnMapifyMaximize');
        this.btnMapifyClose = document.getElementById('btnMapifyClose');
        this.mapifyToggle = document.getElementById('mapifyToggle');
        this.latitude = '';
        this.longitude = '';
        this.map;
    }
    app(){
        this.btnMapifyClose.addEventListener('click', ()=>{
            this.close();
            // this should also kill any process
        })
        this.mapifyToggle.addEventListener('click', ()=>{
            this.close();
        })
        this.btnMapifyMinimize.addEventListener('click', () => {
            this.close();
        })
        this.btnMapifyMaximize.addEventListener('click', ()=>{
            this.mapify.classList.toggle('h-full');
            this.mapify.classList.toggle('w-full');
            this.mapify.classList.toggle('h-1/2');
            this.mapify.classList.toggle('w-1/2');
        })
    }

    close(){
        this.mapify.classList.toggle('hidden');
        this.mapify.classList.toggle('grid');
        this.mapifyToggle.classList.toggle('bg-gray-100');
    }

    initializeMap(){
        if(navigator.geolocation){ // check for older browsers
            /**
             *
             * The navigator.geolocation API allows web applications to get the user's current location using GPS,
             * Wi-Fi, or cellular networks. It is commonly used in maps, weather apps, ride-sharing services, \
             * and location-based services.
             *
             * => How It Works:
             * 1. Calls navigator.geolocation.getCurrentPosition().
             * 2. If successful, it returns a position object with:
             *      a. position.coords.latitude (Latitude)
             *      b. position.coords.longitude (Longitude)
             * 3. If failed, an error message is logged.
             *
             *
             * => Instead of just getting the location once, you can track it continuously.
             * Use case :
             * 1. Tracking users on a map in real-time.
             * 2. Location-based reminders (e.g., “You're near a coffee shop!”).
             *
             * const watchID = navigator.geolocation.watchPosition(
             *     (position) => {
             *         console.log("Updated Latitude:", position.coords.latitude);
             *         console.log("Updated Longitude:", position.coords.longitude);
             *     },
             *     (error) => {
             *         console.error("Error watching location:", error.message);
             *     }
             * );
             *
             * // To stop tracking:
             * navigator.geolocation.clearWatch(watchID);
             *
             *
             */
            navigator.geolocation.getCurrentPosition(position => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                const cords = [this.latitude, this.longitude];
                this.map = L.map('map').setView(cords, 13);

                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(this.map);


                this.map.on('click', (mapEvent) =>  {
                    const {lat,lng} = mapEvent.latlng; // object destructuring
                    L.marker([lat,lng]).addTo(this.map)
                        .bindPopup(L.popup({
                            maxWidth:200,
                            minWidth:200,
                            autoClose:false,
                            closeOnClick: false,
                            className: 'popup-bg'
                        }))
                        .openPopup();
                })

            }, err => {
                console.log(err);
            })

        }
    }
    render(){
        this.app();
        this.initializeMap();
    }
}