import { LightningElement } from 'lwc';

export default class EventBubblingGrandParent extends LightningElement {
    handleGrandParentDivClick(){
        console.log('Grand Parent div clicked');
    }
    handleGrandParentDivClick1(){
        console.log('Grand Parent div 1 clicked');
    }

}