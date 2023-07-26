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

function navSystem(selector) {
    // Get all the anchor elements inside the navigation menu
    const navLinks = document.querySelectorAll(selector);

    // Loop through each anchor element
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Remove the 'active' class from all anchor elements
            navLinks.forEach(item => {
                if (item !== event.target) {
                    item.classList.remove('active');
                }
            });

            // Add the 'active' class to the clicked anchor element
            // event.target.classList.add('active');
            const anchor = event.target.closest("a");   // Find closest Anchor (or self)
            if (!anchor) return;                        // Not found. Exit here.
            anchor.classList.add('active');

            // if it is sub-menu anchor,
            // add active to the ancestor anchor
            const ancestorDropdown = findAncestor(event.target, '.dropdown');
            if (ancestorDropdown) {
                // get first anchor
                const a = ancestorDropdown.querySelector('a')
                a.classList.add('active');
            }
        });
    });
}