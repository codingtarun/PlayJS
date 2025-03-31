export class Mapify{
    constructor(){
        this.mapify = document.getElementById("mapify");
        this.btnMapifyMinimize = document.getElementById('btnMapifyMinimize');
        this.btnMapifyMaximize = document.getElementById('btnMapifyMaximize');
        this.btnMapifyClose = document.getElementById('btnMapifyClose');
        this.mapifyToggle = document.getElementById('mapifyToggle');
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

    render(){
        this.app();
    }
}