import _AbstractPartialView from './_AbstractPartialView.js';

export default class extends _AbstractPartialView {
    constructor() {
        super();
    }

    async getHtml() {
        return `
        <div class="footer-wrapper">
            <span class="icon"><span>&#9818</span></span>
            <span class="icon"><span>&#9812</span></span>
            <span class="icon"><span>&#9962</span></span>
        </div>
        `
    }
}
