import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Post Detail");
    }

    async getHtml() {
        console.log(this.params.id);

        return `
        <h1>Post Detail</h1>
        `;
    }
}