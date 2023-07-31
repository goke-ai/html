import _AbstractPartialView from './_AbstractPartialView.js';

export default class extends _AbstractPartialView {
    constructor() {
        super();
    }

    async getHtml() {
        return `
        <div class="drawer-wrapper">
            <div class="drawer-controller">
                <div class="btn icon" style="--_clr-icon: var(--clr-accent)">
                </div>
            </div>
            <div class="drawer-content">
                <nav class="drawer-navigation">
                    <ul class="drawer-nav-list flex">
                        <li><a data-link href="/"><span class="nav-item-wrapper"><span class="icon"
                                        style="--_clr-icon: yellow">X</span><span class="nav-item-text">Drawer Link
                                        1</span></span></a></li>
                        <li class="dropdown">
                            <a href="#" title="Components"><span class="nav-item-wrapper">
                                    <span class="icon" style="--_clr-icon: lime">X</span><span
                                        class="nav-item-text">Components</span></span>
                            </a>
                            <ul class="dropdown-list pop-right">
                                <li><a data-link href="/">Sub Drawer2 1</a></li>
                                <li><a data-link href="/contact">Forms</a></li>
                                <li><a data-link href="/">Sub Drawer2 3</a></li>
                                <li><a data-link href="/">Sub Drawer2 4</a></li>
                                <li><a data-link href="/">Sub Drawer2 5</a></li>
                            </ul>
                        </li>
                        <li><a data-link href="/"><span class="nav-item-wrapper"><span class="icon"
                                        style="--_clr-icon: yellow">X</span><span class="nav-item-text">Drawer Link
                                        3</span></span></a></li>
                        <li><a data-link href="/"><span class="nav-item-wrapper"><span class="icon"
                                        style="--_clr-icon: violet">X</span><span class="nav-item-text">Drawer Link
                                        4</span></span></a></li>
                        <li><a data-link href="/"><span class="nav-item-wrapper"><span class="icon"
                                        style="--_clr-icon: brown">X</span><span class="nav-item-text">Drawer Link
                                        5</span></span></a></li>
                    </ul>
                </nav>
            </div>

            <div class="drawer-controller">
                <div class="btn icon" style="--_clr-icon: var(--clr-accent)">
                </div>
            </div>

        </div>

        `
    }
}
