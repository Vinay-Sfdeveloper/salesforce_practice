import { LightningElement } from 'lwc';

export default class ParentBubbling extends LightningElement {
     messageFromChild;


    handleButtonClick(event){
        console.log('Parent# Handle Button Click');
        this.messageFromChild = event.detail;
        console.log('Message from Child to Parent: ' + this.messageFromChild);
    }
}