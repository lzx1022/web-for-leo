// 目录:
//     1.函数定义：
//     1.highlightNav()
//     2.lzxSlider()            图片轮播插件

//     2.载入所有函数
function highlightNav() {
    var nav = document.getElementsByTagName("nav");
    if (nav.length == 0) return false;
    var links = nav[0].getElementsByTagName("a"),
        linkurl, lowerlinkurl;
    for (var i = links.length - 1; i >= 0; i--) {
        linkurl = links[i].textContent.toLowerCase() + "/";
        if (window.location.href.indexOf(linkurl) != -1) {
            links[i].className = "here";
        }
    }
};

function highlightNav_2() {
    if ($("nav").length > 0) {
        for (var i = 0; i < $("nav a").length; i++) {
            var
            if (window.location.href.indexOf($("nav a").text()) != -1) {
                $("nav a")[i]
            };
        };
    }
}


function lzxSlider() {
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

$(function() {
    lzxSlider();
})
