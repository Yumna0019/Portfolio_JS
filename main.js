// document.addEventListener("DOMContentLoaded", function () {
//     var typed = new Typed("#dynamic-name", {
//         strings: ["Yumna Mubeen", "a Frontend Developer", "a Creative Coder"],
//         typeSpeed: 100,
//         backSpeed: 50,
//         backDelay: 1500,
//         startDelay: 500,
//         loop: true,
//         showCursor: true,
//         cursorChar: "|",
//     });
// });

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        // tabcontent.classList.remove("active-tab");
        tabcontent.style.display = "none";
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).style.display = "block";
    // document.getElementById(tabname).classList.add("active-tab");
}