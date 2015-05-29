// 目录:
//     1.函数定义：
//          1. leoHighlightNav()
//          2. leoSlider()            图片轮播插件
//          3. leoHoverProject()

//     2.载入所有函数

// 1.1. highlightNav()
function leoHighlightNav() {
    var url = window.location.href;
    if ($("nav").length > 0) {
        $("nav a").each(function() {
            var a_text = $(this).text().toLowerCase(),
            // 加上 "/" 防止本地测试的时候有其他字符串干扰
                a_text_str = a_text.split(" ").join("-") + "/";
            if (url.indexOf(a_text_str) != -1) {
                $(this).addClass("here")
        }
    })} else return false;
}

// 1.2. lzxSlider()
function leoSlider() {
    if ($(".main-enter-page").length > 0) {
        $(".slideBox").slide({
            mainCell: ".bd ul",
            effect: "fold",
            autoPlay: true,
            easing: "easeInOutCubic",
            interTime: 9000,
            delayTime: 4000,
            pnLoop: true
        });
    } else if ($(".slideBox").length > 0) {
        $(".slideBox").slide({
            mainCell: ".bd ul",
            effect: "fold",
            autoPlay: true,
            trigger: "click",
            easing: "easeInOutCubic",
            interTime: 5000,
            delayTime: 1000,
            mouseOverStop: true,
            pnLoop: true
        });
    } else return false;
}

// 1.3. hoverProject()
function leoHoverProject() {

}

$(function() {
    leoHighlightNav();
    leoSlider();
})
