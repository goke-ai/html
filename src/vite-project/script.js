import { findAncestor } from './base.js'


// 
export function drawerSys(selector, parent) {
    const ctrls = document.querySelectorAll(selector);
    ctrls.forEach((ctrl) => {
        ctrl.addEventListener('click', (event) => {
            // add active to the ancestor anchor
            const ancestor = findAncestor(event.target, parent);            
            ancestor.classList.toggle('collapse');
        })
    });
}


//