import { LightningElement, track } from 'lwc';


export default class GrandParentBubbling extends LightningElement {


    messageFromChild;


    handleButtonClick(event){
        console.log('Grand Parent# Handle Button Click');
        this.messageFromChild = event.detail;
        console.log('Message from Child to Grand Parent: ' + this.messageFromChild);
    }

    handleGrandParentDivClick(){
        console.log('Grand Parent div clicked');
    }
    handleGrandParentDivClick1(){
        console.log('Grand Parent div 1 clicked');
    }
}