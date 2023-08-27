import _AbstractPartialView from './_AbstractPartialView.js';

export default class extends _AbstractPartialView {
    constructor() {
        super();
    }

    async getHtml() {
        return `
        <nav class="primary-navigation flex">
        <div class="logo"><span class="icon">LOGO</span></div>

        <input type="checkbox" class="navbar-controller" name="navbar-controller" id="navbar-controller">
        <label class="navbar-controller-label" for="navbar-controller"><span class="icon">X</span></label>

        <ul class="primary-nav-list flex">
          <li><a class="active" href="#">Home</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li class="dropdown"><a href="#">Account</a>
            <ul class="dropdown-list">
              <li><a href="#">Login</a></li>
              <li><a href="register.html">Register</a></li>
              <li><a href="#">Sub Menu3 3</a></li>
            </ul>
          </li>
          <li class="dropdown"><a href="#">Components Menu Four</a>
            <ul class="dropdown-list pop-down-left">
              <li><a href="contact.html">Forms</a></li>
              <li><a href="components.html">Components</a></li>
              <li><a href="#">Sub Menu3 Menu X3</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    `
    }
}


