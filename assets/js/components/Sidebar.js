export class Sidebar{
    constructor() {
        this.appToggle = document.getElementById('appToggle');
        this.appStore = document.getElementById('appStore');
        this.btnAppStoreMinimize = document.getElementById('btnAppStoreMinimize');
        this.btnAppStoreMaximize = document.getElementById('btnAppStoreMaximize');
        this.btnAppStoreClose = document.getElementById('btnAppStoreClose');
        this.iconGame = document.getElementById('icon-game');
        this.groupGame = document.getElementById('group-game');
        this.startUbuntu = document.getElementById('startUbuntu');
        this.ubuntuMenuBox = document.getElementById('ubuntuMenuBox');
    }
    renderSidebar(){

        this.iconGame.addEventListener('click', (e) => {
            e.preventDefault();
            if(this.groupGame.classList.contains('opacity-0')){
                this.groupGame.classList.remove('opacity-0');
                this.groupGame.classList.add('opacity-100');
            }else{
                this.groupGame.classList.remove('opacity-100');
                this.groupGame.classList.add('opacity-0');
            }
        });
    }
    handleUbuntuButtonEvents() {
        this.startUbuntu.addEventListener('click', (e) => {
            e.preventDefault();
            if(this.ubuntuMenuBox.classList.contains('opacity-0')){
                this.ubuntuMenuBox.classList.remove('opacity-0','h-1','w-1','-z-10');
                this.ubuntuMenuBox.classList.add('opacity-100','h-9/10','md:h-3/4','w-9/10','md:w-3/4');
                this.close();
            }else{
                this.ubuntuMenuBox.classList.add('opacity-0','h-1','w-1','-z-10');
                this.ubuntuMenuBox.classList.remove('opacity-100', 'h-9/10','md:h-3/4','w-9/10','md:w-3/4');
            }
        })
    }
    handleAppStoreEvents(){
        this.appToggle.addEventListener('click', this.toggle.bind(this));
        this.btnAppStoreMinimize.addEventListener('click', this.close.bind(this));
        this.btnAppStoreMaximize.addEventListener('click',this.maximize.bind(this));
        this.btnAppStoreClose.addEventListener('click', this.close.bind(this));
    }
    close(){
        this.appStore.classList.add('hidden');
    }
    toggle() {
        this.appStore.classList.toggle('hidden');
    }
    maximize(){
        if(this.appStore.classList.contains('top-0') && appStore.classList.contains('left-0')){
            this.appStore.style.top= '50%';
            this.appStore.style.left= '50%';
            this.appStore.classList.remove("absolute","top-0","left-0","h-full","w-full");
            this.appStore.classList.add("absolute","top-1/2","left-1/2","transform","-translate-x-1/2","-translate-y-1/2","h-3/4","w-3/4","rounded-xl","opacity-100");
        }else{
            this.appStore.style.top= '0';
            this.appStore.style.left= '0';
            this.appStore.classList.remove("absolute","top-1/2","left-1/2","transform","-translate-x-1/2","-translate-y-1/2","h-3/4","w-3/4","rounded-xl","opacity-100");
            this.appStore.classList.add("absolute","top-0","left-0","h-full","w-full");
        }
    }
    render(){
        this.renderSidebar();
        this.handleAppStoreEvents();
        this.handleUbuntuButtonEvents()
    }
}