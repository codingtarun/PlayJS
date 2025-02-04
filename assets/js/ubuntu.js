// Navbar : Date & Time
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
}, 60000);

// Sidebar : Games
const iconGame = document.getElementById('icon-game');
const groupGame = document.getElementById('group-game');
iconGame.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("games clicked");
    if(groupGame.classList.contains('opacity-0')){
        groupGame.classList.remove('opacity-0');
        groupGame.classList.add('opacity-100');
    }else{
        groupGame.classList.remove('opacity-100');
        groupGame.classList.add('opacity-0');
    }
});
// Start Ubuntu

const startUbuntu = document.getElementById('startUbuntu');
const ubuntuMenuBox = document.getElementById('ubuntuMenuBox');
startUbuntu.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("startUbuntu");
    if(ubuntuMenuBox.classList.contains('opacity-0')){
        ubuntuMenuBox.classList.remove('opacity-0','h-1','w-1','-z-10');
        ubuntuMenuBox.classList.add('opacity-100','h-9/10','md:h-3/4','w-9/10','md:w-3/4');
    }else{
        ubuntuMenuBox.classList.add('opacity-0','h-1','w-1','-z-10');
        ubuntuMenuBox.classList.remove('opacity-100', 'h-9/10','md:h-3/4','w-9/10','md:w-3/4');

    }
})
