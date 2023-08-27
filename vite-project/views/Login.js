import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Login");
    }

    async getHtml() {
        let url = '/views/login.html'
        const resp = await fetch(url);
        const html = await resp.text();
        return html;
    }
}