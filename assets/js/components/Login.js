export class Login{
    constructor() {
        this.loginScreen = document.getElementById("loginScreen");
        this.loginForm = document.getElementById("loginForm");
    }
    checkLogin(){
        if(localStorage.getItem('userData') !== null){
            this.loginScreen.classList.add('hidden');
        }else{
            this.loginScreen.classList.remove('hidden');
        }
    }
    togglePasswordType(){
        this.loginForm.querySelector('label').addEventListener('click', ()=>{
            if(this.loginForm.querySelector('input').type === 'text'){
                this.loginForm.querySelector('input').type = 'password';
            }else{
                this.loginForm.querySelector('input').type = 'text';
            }
        });
    }
    userLogin(){
        this.loginForm.onsubmit = (event) => {
            event.preventDefault();
            const password = this.loginForm.querySelector('input').value;
            if(password !== '' && password.length >= 3){

                const userData = {
                    username: 'Root',
                    password: password
                };
                localStorage.setItem('userData', JSON.stringify(userData));

                this.loginScreen.classList.add('hidden');
                this.loginForm.querySelector('p').classList.add('hidden');
            }else{
                this.loginForm.querySelector('p').classList.add('text-red-500');
            }
        }
    }
    render(){
        this.checkLogin();
        this.togglePasswordType();
        this.userLogin();
    }
}