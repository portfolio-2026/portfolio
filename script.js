document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navmenu = document.querySelector('.sp-nav');

    hamburger.addEventListener('click', function(){
        this.classList.toggle('active');
        navmenu.classList.toggle('active');
    });

    // メニュー外クリックで閉じる
    document.addEventListener('click',function(e){
        if(!hamburger.contains(e.target) && !navmenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navmenu.classList.remove('active');
        }
    });
});