export function findAncestor(element, selector) {
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

export function color_theme() {
    ///+
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
}

function removeAllNavActive(navLinks, target) {
    navLinks.forEach(item => {
        if (item !== target) {
            item.classList.remove('active');
        }
    });
}


function setDropdownActive(target) {
    const ancestorDropdown = findAncestor(target, '.dropdown');
    if (ancestorDropdown) {
        // get first anchor
        const a = ancestorDropdown.querySelector('a');
        a.classList.add('active');
    }
}

export function navSystem(selector) {
    // Get all the anchor elements inside the navigation menu
    const navLinks = document.querySelectorAll(selector);

    // Loop through each anchor element
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {

            // // Remove the 'active' class from all anchor elements
            // removeAllNavActive(navLinks, event.target);

            // Add the 'active' class to the clicked anchor element
            // event.target.classList.add('active');
            const anchor = event.target.closest("a");   // Find closest Anchor (or self)

            if (!anchor) return;                        // Not found. Exit here.

            const selector = `a[href="${anchor.pathname}"][data-link]`;

            routeNavActive(selector);

        });
    });

    const selector0 = `a[href="${location.pathname}"][data-link]`

    routeNavActive(selector0);

}

function routeNavActive(selector) {
    const routeElts = document.querySelectorAll(selector);

    // Remove the 'active' class from all anchor elements
    const navLinks2 = document.querySelectorAll('a[data-link]');
    removeAllNavActive(navLinks2);

    // make current route active
    routeElts.forEach(anchor => {
        // make active
        // anchor.click();
        anchor.classList.add('active');
        // 
        // if it is sub-menu anchor,
        // add active to the ancestor anchor
        setDropdownActive(anchor);
    });
}

