export class Popup{
    constructor() {
        this.aboutPopup = document.getElementById('aboutPopup');
        this.aboutPopupClose = document.getElementById('aboutPopupClose');
        this.aboutPopupInfo = document.getElementById('aboutPopupInfo');
    }
    renderPopup(){
        if(localStorage.getItem('userData') !== null) {
            setTimeout(()=>{
                this.aboutPopup.classList.remove('hidden');
                this.aboutPopup.classList.add('flex');
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