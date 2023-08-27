import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { color_theme, navSystem } from './base.js'
import { drawerSys } from './script.js'
import Components from './views/Components.js';
import Dashboard from "./views/Dashboard.js";
import Contact from './views/Contact'
import PostDetail from './views/PostDetail'
import _Drawer from './views/_Drawer'
import _Sidebar from './views/_Sidebar'
import _Navbar from './views/_Navbar'
import _Footer from './views/_Footer'
import Login from './views/Login'
import Page404 from './views/Page404'

document.querySelector('#app').innerHTML = `
<div>
    <section class="primary-layout flex">
        <aside class="drawer"></aside>

        <section class="page">
            <header></header>
            <main></main>
            <footer></footer>
        </section>
    </section>

    <aside class="sidebar"></aside>

</div>
`

// setupCounter(document.querySelector('#counter'))

// partial views
const partialViews = async () => {

    // drawer
    document.querySelector('.drawer').innerHTML = await(new _Drawer()).getHtml();
    drawerSys('.drawer-controller', '.drawer-wrapper');

    // sidebar
    document.querySelector('.sidebar').innerHTML = await(new _Sidebar()).getHtml();
    drawerSys('.sidebar-controller', '.sidebar-wrapper');

    //color theme
    color_theme();


    // navbar
    // navSystem('nav.drawer-navigation a');
    // navSystem('nav.primary-navigation a');
    document.querySelector('header').innerHTML = await(new _Navbar()).getHtml();
    navSystem('nav.drawer-navigation a, nav.primary-navigation a');

    // footer
    document.querySelector('footer').innerHTML = await(new _Footer()).getHtml();
}

// navigation
// router
const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/404", view: Page404 },
        { path: "/", view: Dashboard },
        { path: "/contact", view: Contact },
        { path: "/posts/:id", view: PostDetail },
        { path: "/login", view: Login },
        { path: "/components", view: Components },

    ];

    const routeMatches = routes.map(route => {
        return {
            route: route,
            // isMatch: location.pathname === route.path,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = routeMatches.find(r => r.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            // isMatch: true,
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    document.querySelector('main').innerHTML = await view.getHtml();

    // console.log(location.pathname);
    // // const selector = data-link href="/register
    // const selector = `a[href="${location.pathname}"]`
    // console.log(selector);
    // const element = document.querySelector(selector);
    // console.log(element);
    // // element.click();
    // const activeElt = document.querySelector('a.active');
    // console.log(activeElt);

}

window.addEventListener('popstate', router);

document.addEventListener("DOMContentLoaded", () => {
    // prevent page refresh
    document.body.addEventListener('click', (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    // 
    partialViews();
    // 
    router();


});