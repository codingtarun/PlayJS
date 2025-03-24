export class JavaScriptNotes{
    constructor(){
        this.javaScriptNotesIcon = document.getElementById('javaScriptNotesIcon');
        this.javaScriptNotesWindow = document.getElementById('javaScriptNotesWindow');
    }
    toggleJavaScriptNotesWindow(){
        this.javaScriptNotesWindow.classList.toggle('hidden');
    }
    handleJavaScriptNotesButtonClick(){
        this.javaScriptNotesIcon.onclick = ()=> {
            this.toggleJavaScriptNotesWindow();
        }
    }
    fetchFileText(){

    }
    render(){
        this.handleJavaScriptNotesButtonClick();
        this.fetchFileText();
    }
}