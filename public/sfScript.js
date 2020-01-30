import {
    LightningElement,
    track
} from 'lwc';

export default class App extends LightningElement {
    /**
     * @track indicates that if this object changes,
     * the UI should update to reflect those changes.
     */

    @track
    title = 'Welcome to Lightning Web Components Playground!';

    @track value = '';

    @track buttonStatefulState = false;

    handleButtonStatefulClick() {
        this.buttonStatefulState = !this.buttonStatefulState;
    }
}