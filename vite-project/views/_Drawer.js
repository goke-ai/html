import _AbstractPartialView from './_AbstractPartialView.js';

export default class extends _AbstractPartialView {
    constructor() {
        super();
    }

    async getHtml() {
        return `
        <div class="drawer-wrapper">
        <div class="drawer-controller">
          <span class="icon">
          </span>
        </div>
        <div class="drawer-content">
          <nav class="drawer-navigation">
            <ul class="drawer-nav-list flex">
              <li><a href="/"><span class="nav-item-wrapper"><span class="icon">X</span><span
                      class="nav-item-text">Home
                      1</span></span></a></li>
              <li class="dropdown"><a href="#"><span class="nav-item-wrapper">
                    <span class="icon">X</span><span class="nav-item-text">Components</span></span>
                </a>
                <ul class="dropdown-list pop-right">
                  <li><a href="/">Sub Drawer2 1</a></li>
                  <li><a href="/contact">Forms</a></li>
                  <li><a href="/components">Components</a></li>
                  <li><a href="#">Sub Drawer2 4</a></li>
                  <li><a href="#">Sub Drawer2 5</a></li>
                </ul>
              </li>
              <li><a href="#"><span class="nav-item-wrapper"><span class="icon">X</span><span
                      class="nav-item-text">Drawer Link
                      3</span></span></a></li>
              <li><a href="#"><span class="nav-item-wrapper"><span class="icon">X</span><span
                      class="nav-item-text">Drawer Link
                      4</span></span></a></li>
              <li><a href="#"><span class="nav-item-wrapper"><span class="icon">X</span><span
                      class="nav-item-text">Drawer Link
                      5</span></span></a></li>
            </ul>
          </nav>
        </div>

      </div>
        `
    }
}
