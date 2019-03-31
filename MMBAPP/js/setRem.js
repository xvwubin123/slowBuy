$(function(){
    function setRem() {
        var w = window.innerWidth;
        if (w > 750) {
            w = 750;
        }
        if (w < 320) {
            w = 320;
        }
        document.documentElement.style.fontSize = w / 10 + 'px';
    }
    setRem();
    window.onresize = setRem;
})
