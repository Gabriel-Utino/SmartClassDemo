document.addEventListener('DOMContentLoaded', function () {
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    const subMenus = document.getElementById('subMenus'); // 新しいサイドバー要素を追加

    sidebarToggle.addEventListener('click', function () {
        if (sidebar.style.width === '500px') {
            sidebar.style.width = '0';
            subMenus.style.width = '0'; // サイドバー2も非表示に
        } else {
            sidebar.style.width = '250px';
            subMenus.style.width = '250px'; // サイドバー2も表示
        }
    });
});

