
function findAncestor(element, selector) {
    try {
        while (element
            //&& (element instanceof Element)
            && !element.matches(selector)) {
            element = element.parentNode;
        }
        return element;
    } catch (error) {
        //console.error(error);
    }
}

///+nav

// Get all the anchor elements inside the navigation menu
const menuItems = document.querySelectorAll('.primary-nav-list li a');

// Loop through each anchor element
menuItems.forEach(item => {
    // Add a click event listener to each anchor element
    item.addEventListener('click', (event) => {
        // Remove the 'active' class from all anchor elements
        menuItems.forEach(item => {
            if (item !== event.target) {
                item.classList.remove('active-dropdown');
                item.classList.remove('active');
                item.removeAttribute('aria-current');
            }
        });

        // check if it is dropdown anchor element
        if (event.target.classList.contains("dropdown-toggle") === true) {
            // get 
            // event.target.classList.toggle('active');
            // event.target.classList.toggle('active-dropdown');
            // item.removeAttribute('aria-current');
        }
        else {
            // Add the 'active' class to the clicked anchor element
            event.target.classList.add('active');
            // disable click
            event.target.setAttribute('aria-current', "page");
        }

        // if it is sub-menu anchor,
        // add active-dropdown to the ancestor anchor
        const ancestor = findAncestor(event.target, '.dropdown');
        if (ancestor) {
            const a = ancestor.querySelector('.dropdown-toggle')
            a.classList.add('active-dropdown');
            // a.setAttribute('aria-current', "page");
        }
    });
});

const primaryNav = document.querySelector(".primary-nav-list");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener('click', (e) => {

    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    }
    else {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
});


///-nav

///+
const btn = document.querySelector(".btn-theme");
const colorThemes = document.querySelectorAll('[name="theme"]');

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

let theme = localStorage.getItem("theme");

colorThemes.forEach((themeElt) => {
    if (themeElt.id === theme) {
        themeElt.checked = true;
    }
});

if (theme == null) {
    if (prefersDarkScheme) {
        theme = "dark";
    } else {
        theme == "light";
    }
}

document.documentElement.className = theme;

colorThemes.forEach((themeElt) => {
    themeElt.addEventListener('click', (e) => {

        theme = themeElt.id;
        localStorage.setItem("theme", theme);
        document.documentElement.className = theme;

    });
});


///-