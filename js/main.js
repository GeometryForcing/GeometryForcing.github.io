// 将 'DOMContentLoaded' 更改为 'load'
// 'load' 事件会等待页面上所有资源（如图片、CSS文件等）都加载完毕后才触发
window.addEventListener('load', () => {

    // 初始化页面上所有的 bulma-compare 元素
    // 这将确保在图片完全加载后才执行滑块的初始化
    bulmaCompare.attach();

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }
});