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


// Get all the anchor elements inside the navigation menu
const menuItems = document.querySelectorAll('.primary-navigation li a');

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

        if (event.target.classList.contains("dropdown-toggle") === true) {
            // get 
            event.target.classList.toggle('active');
            // event.target.classList.toggle('active-dropdown');
            item.removeAttribute('aria-current');
        }
        else {
            // Add the 'active' class to the clicked anchor element
            event.target.classList.add('active');
            // disable click
            event.target.setAttribute('aria-current', "page");
        }

        // add active-dropdown
        const ancestor = findAncestor(event.target, '.dropdown');
        if (ancestor) {
            const a = ancestor.querySelector('.dropdown-toggle')
            a.classList.add('active-dropdown');
        }


    });
});



const primaryNav = document.querySelector(".primary-navigation");
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
