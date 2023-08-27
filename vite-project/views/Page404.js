import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("404");
    }

    async getHtml() {
        return `
        <div class="wrapper flow" style="align-item: center">
            <div style="font-size: calc(var(--fs-900) * 2)">404!</div>
            <div>Page Not Found!!!</div>

        
        </div>
        `;
    }
}