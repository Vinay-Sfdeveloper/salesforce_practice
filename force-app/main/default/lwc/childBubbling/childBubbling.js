import { LightningElement, track } from 'lwc';


export default class ChildBubbling extends LightningElement {
     message = 'This is from Child';


    handleClick(){
        const selectEvent = new CustomEvent("buttonclick",
        {
            bubbles : false,
            composed : true,
            detail : this.message,
        });


        this.dispatchEvent(selectEvent);
    }
}
// If Bubbles = false, then the event will not bubble up to the parent component. 
// If Composed = false, then the event will not cross the shadow DOM boundary and will not be heard by the grandparent component.
    // It will not call Parent's onbuttonclick handler, but it will call Grand Parent's ongrandparentdivclick handler because the event is still bubbling up through the DOM, but it will not call Parent's onbuttonclick handler because the event is not crossing the shadow DOM boundary.