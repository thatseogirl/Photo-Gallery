let fontIcons = document.getElementById('icon');

fontIcons.addEventListener('click', triggerScroll);
function triggerScroll() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}