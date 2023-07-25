
const drawerCtrl = document.querySelector('.drawer-controller');
const sidebarCtrl = document.querySelector('.sidebar-controller');

drawerCtrl.addEventListener('click', () => {

    document.querySelector('.drawer-wrapper').classList.toggle('collapse');

})

sidebarCtrl.addEventListener('click', () => {

    document.querySelector('.sidebar-wrapper').classList.toggle('collapse');

})