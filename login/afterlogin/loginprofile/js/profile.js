const menus = document.querySelectorAll('.library_nav_item');
const tabs = document.querySelectorAll('.library_tab');

menus.forEach((menu, index)=>{
    menu.addEventListener('click', (e)=>{
        menus.forEach(menu=>{menu.classList.remove('active')});
        menu.classList.add('active');

        tabs.forEach(tab=>{tab.classList.remove('active')});
        tabs[index].classList.add('active');
    })
})

