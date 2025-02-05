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
    if(ubuntuMenuBox.classList.contains('opacity-0')){
        ubuntuMenuBox.classList.remove('opacity-0','h-1','w-1','-z-10');
        ubuntuMenuBox.classList.add('opacity-100','h-9/10','md:h-3/4','w-9/10','md:w-3/4');
    }else{
        ubuntuMenuBox.classList.add('opacity-0','h-1','w-1','-z-10');
        ubuntuMenuBox.classList.remove('opacity-100', 'h-9/10','md:h-3/4','w-9/10','md:w-3/4');

    }
})

// Ubuntu Start Installed Apps List




// Ubuntu Store Apps List

// Defining an App object with its properties & methods

class App{
    // Defining class properties
    title;
    company;
    description;
    status;
    installed;
    rating;
    image;
    link;
    constructor(title,company,link,description,status,installed,rating,image) {
        // Constructor to set the properties values based on value passed when this class is initialized.
        this.title = title;
        this.company = company;
        this.link = link;
        this.description = description;
        this.status = status;
        this.installed = installed;
        this.rating = rating;
        this.image = image;
    }
}
// Class for the App Card , responsible to display a single product.

// Toggle App Store

const appToggle = document.getElementById('appToggle');
const appStore = document.getElementById('appStore');
const btnAppStoreMinimize = document.getElementById('btnAppStoreMinimize');
const btnAppStoreMaximize = document.getElementById('btnAppStoreMaximize');
const btnAppStoreClose = document.getElementById('btnAppStoreClose');

appToggle.addEventListener('click', () => {
    appStore.classList.toggle('hidden');
});

btnAppStoreMinimize.addEventListener('click', () => {
    appStore.classList.add('hidden');
})
btnAppStoreMaximize.addEventListener('click', () => {
    if(appStore.classList.contains('top-0') && appStore.classList.contains('left-0')){
        appStore.classList.remove("absolute","top-0","left-0","h-full","w-full");
        appStore.classList.add("absolute","top-1/2","left-1/2","transform","-translate-x-1/2","-translate-y-1/2","h-3/4","w-3/4","rounded-xl","opacity-100");
    }else{
        appStore.classList.remove("absolute","top-1/2","left-1/2","transform","-translate-x-1/2","-translate-y-1/2","h-3/4","w-3/4","rounded-xl","opacity-100");
        appStore.classList.add("absolute","top-0","left-0","h-full","w-full");
    }

})
btnAppStoreClose.addEventListener('click', () => {
    appStore.classList.add('hidden');
})


class AppCard{
    constructor(app) {
        this.app = app;
    }
    render(){
        const card = document.createElement('div');
        card.classList.add('flex','bg-white','p-2','border-1','border-gray-400','rounded-2xl','min-h-32','shadow-sm','hover:cursor-pointer');
        card.innerHTML =`<img src="./assets/images/${this.app.image}" alt="" srcset="" class="flex-2 w-[75px] h-[75px]">
                         <div class="flex flex-col flex-10 text-black w-full px-2">
                             <h3 class="text-md">${this.app.title}</h3>
                             <a href="${this.app.link}" target="_blank" class="text-xs text-gray-400 hover:cursor-pointer hover:text-gray-600">${this.app.company}</a>
                             <p class="text-xs">${this.app.description}</p>
                             <span>${this.app.rating} <i class="far fa-star"></i></span>
                             <button class="border-1 border-gray-400 w-full mt-auto ${this.app.installed ? 'hover:bg-red-700' : 'hover:bg-green-700'} rounded-sm hover:text-white hover:cursor-pointer">${this.app.installed ? 'Uninstall' : 'Install'}</button>
                         </div>`;
        const btnAppInstall = card.querySelector('button');
        btnAppInstall.addEventListener('click', this.installApp.bind(this)); // Using 'bind' function to set the context for event Listner function
        return card;
    }
    // Install Application function
    installApp() {
        // 'this' keyword here will lose its context , so to set the context we'll use bind here
        console.log(this.app);
        this.app.installed = !this.app.installed;
    }
    uninstallApp(){
        console.log(this.app);
    }
}



// Uninstall application function

// Using a class to hold all the properties and methods related to APPS.
class AppsList{
    apps = [
        new App('WhatsApp','Meta','https://www.whatsapp.com/','A messaging app that allows users to send text, voice, video calls, and files. The desktop version syncs with the mobile app for seamless communication.',true,false,4.5,'whatsapp.png'),
        new App('Spotify','Spotify Technology S.A.','https://www.spotify.com/',' A leading music streaming service offering millions of songs, podcasts, and playlists with both free and premium options.',true,true,4.5,'spotify.png'),
        new App('Firefox','Mozilla Foundation','https://www.mozilla.org/firefox/',' A privacy-focused, open-source web browser known for speed, security, and customization with a wide range of add-ons.',true,false,4.5,'firefox.png'),
        new App('Google Chrome','Google LLC','https://www.google.com/chrome/','A fast, user-friendly web browser offering seamless synchronization with Google services and a vast library of extensions.',true,true,5, 'chrome.png'),
        new App('LibraOffice','The Document Foundation','https://www.libreoffice.org/','A comprehensive, free office suite offering word processing, spreadsheets, presentations, and more, serving as a robust alternative to Microsoft Office.',true,true,4,'libraoffice.png'),
    ];

    render(){
        // function responsible to render the list on the page.
        const ubuntuAppsList = document.getElementById('ubuntuAppsList');
        // creating a new element to hold Apps card togeather.
        const appCard = document.createElement('div');
        appCard.classList.add('grid','grid-cols-2','gap-2');
        this.apps.forEach((app) => {
            appCard.append(new AppCard(app).render());
        });
        ubuntuAppsList.appendChild(appCard);
    }
    // Ubuntu Start installed apps
    renderInstalledApps(){
        const ubuntuStartInstalledApps = document.getElementById('ubuntuStartInstalledApps');
        // creating a 'li' element
        const installedAppsList = document.createElement('li');
        // adding required classes
        installedAppsList.classList.add('grid','grid-cols-5','grid-rows-auto','list-none');
        this.apps.forEach((app) => {
            app.installed && app.status ?
            installedAppsList.innerHTML += `<li class="group hover:cursor-pointer opacity-80 hover:opacity-90">
                                    <div class="flex flex-col justify-between items-center">
                                        <img src="/assets/images/${app.image}" alt="" srcset="" class="h-[80px] w-[80px] object-cover">
                                        <span>${app.title}</span>
                                    </div>
                                </li>`
                : ``;
        });
        ubuntuStartInstalledApps.appendChild(installedAppsList);
    }
}

// Instantiating the AppList class

apps = new AppsList();
apps.render()
apps.renderInstalledApps();
