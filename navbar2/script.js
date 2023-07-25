function toggleDrawer() {
    const sidebar = document.getElementById('sidebar');
    const drawer = document.getElementById('drawer');
    sidebar.classList.toggle('active');
    drawer.style.display = drawer.style.display === 'block' ? 'none' : 'block';
}
