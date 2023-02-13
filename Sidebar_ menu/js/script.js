const menuIcon = document.getElementById('menu-icon');
const sidebarMenu = document.getElementById('sidebar-menu');

menuIcon.addEventListener('click', function() {
  sidebarMenu.classList.toggle('active');
});