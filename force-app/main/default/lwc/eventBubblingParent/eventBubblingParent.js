import { LightningElement } from 'lwc';

export default class EventBubblingParent extends LightningElement {
    handleParentDivClick(){
        console.log('Parent div clicked');
    }
    handleParentDivClick1(){
        console.log('Parent div 1 clicked');
    }
}