import _AbstractPartialView from './_AbstractPartialView.js';

export default class extends _AbstractPartialView {
    constructor() {
        super();
    }

    async getHtml() {
        return `
        <nav class="primary-navigation flex">
            <div class="logo"><span class="icon">LOGO</span></div>

            <input type="checkbox" class="navbar-controller navbar-controller-checkbox" name="navbar-controller" id="navbar-controller">
            <label class="navbar-controller navbar-controller-label" for="navbar-controller"><span class="icon"></span></label>

            <ul class="primary-nav-list flex">
                <li><a class="active" data-link href="/">Home <span>🏡</span></a></li>
                <li><a data-link href="/contact">Contact</a></li>
                <li class="dropdown"><a href="#">Account</a>
                    <ul class="dropdown-list">
                        <li><a data-link href="/login">Login</a></li>
                        <li><a data-link href="/register">Register</a></li>
                        <li><a data-link href="/login">Sub Menu3 3</a></li>
                    </ul>
                </li>
                <li class="dropdown"><a href="#">Componets Menu Four</a>
                    <ul class="dropdown-list pop-down-left">
                        <li><a data-link href="/contact">Forms</a></li>
                        <li><a data-link href="/components">Components</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        `
    }
}
