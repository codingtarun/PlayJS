export class ApplicationStoreSlider{
        constructor() {
            this.btnPrevious = document.getElementById('btnPrevious');
            this.btnNext = document.getElementById('btnNext');
            this.appStoreSlider = document.getElementById('appStoreSlider');
            this.currentIndex = 0;
            this.autoSlide = '';
            this.btnPrevious.addEventListener('click', this.previousSlide);
            this.btnNext.addEventListener('click',this.nextSlide);
        }
        updateSlide(){
            this.appStoreSlider.style.transform = `translateX(-${100*this.currentIndex}%)`;
        }
        nextSlide(){
            clearInterval(this.autoSlide);
            this.currentIndex = ((this.currentIndex + 1) % this.appStoreSlider.childElementCount) ? this.currentIndex + 1 : 0;
            this.updateSlide();
        }
        previousSlide(){
            clearInterval(this.autoSlide)
            this.currentIndex = (this.currentIndex - 1 + this.appStoreSlider.childElementCount) % this.appStoreSlider.bind(this).childElementCount;
            this.updateSlide();
        }
        render(){
                this.autoSlide = setInterval(()=>{
                this.currentIndex = (this.currentIndex + 1) % this.appStoreSlider.childElementCount;
                this.updateSlide();
            }, 4000);
        }
}