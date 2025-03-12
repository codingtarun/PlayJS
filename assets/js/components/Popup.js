export class Popup{
    constructor() {
        this.aboutPopup = document.getElementById('aboutPopup');
        this.aboutPopupClose = document.getElementById('aboutPopupClose');
        this.aboutPopupInfo = document.getElementById('aboutPopupInfo');
    }
    fetchData(){
        // Fetch API
        const xhr = new XMLHttpRequest();
        xhr.open('GET','https://jsonplaceholder.typicode.com/posts');
        xhr.responseType = 'json';
        xhr.onload = function () {
            const data =  xhr.response;
            let postHtml = '<ol>';
            for(const post of data){
                postHtml += `<li>${post.id} : ${post.title}</li>`;
            }
            postHtml += '</ol>';
            document.getElementById('aboutPopupInfo').innerHTML =  postHtml;
        }
        xhr.send();
    }
    renderPopup(){
        if(localStorage.getItem('userData') !== null) {
            // Display Popup
            this.fetchData();
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