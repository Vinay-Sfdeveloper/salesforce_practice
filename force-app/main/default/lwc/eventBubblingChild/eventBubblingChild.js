import { LightningElement } from 'lwc';

export default class EventBubblingChild extends LightningElement {
    handleChildDivClick(){
        console.log('Child div clicked');
    }

    childButtonClick(){
        const evt = new CustomEvent('childbuttonclick', {bubbles: true});
        this.dispatchEvent(evt);
    }
}