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
        <label class="navbar-controller navbar-controller-label" for="navbar-controller"><span
            class="icon"></span></label>

        <ul class="primary-nav-list flex">
          <li><a href="/">Home <span>🏡</span></a></li>
          <li><a href="/contact">Contact</a></li>
          <li class="dropdown"><a href="#">Account</a>
            <ul class="dropdown-list">
              <li><a href="/login">Login</a></li>
              <li><a href="/register">Register</a></li>
            </ul>
          </li>
          <li class="dropdown"><a href="#">Componets Menu</a>
            <ul class="dropdown-list pop-down-left">
              <li><a href="/contact">Forms</a></li>
              <li><a href="/components">Components</a></li>
              <li><a href="/people">People</a></li>
            </ul>
          </li>
        </ul>
      </nav>
   `
  }
}


