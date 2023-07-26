// 
function drawerSys(selector, parent) {
    const ctrl = document.querySelector(selector);
    ctrl.addEventListener('click', (event) => {
        // add active to the ancestor anchor
        const ancestor = findAncestor(event.target, parent);
        ancestor.classList.toggle('collapse');
    });
}

// 
drawerSys('.drawer-controller', '.drawer-wrapper');
drawerSys('.sidebar-controller', '.sidebar-wrapper');

// 
// navSystem('nav.drawer-navigation a');
// navSystem('nav.primary-navigation a');
navSystem('nav.drawer-navigation a, nav.primary-navigation a');

//