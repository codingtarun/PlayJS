export class Navbar{
    constructor() {
    }
    renderNavbarDateTime(){
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
    }
    render(){
        this.renderNavbarDateTime();
    }
}