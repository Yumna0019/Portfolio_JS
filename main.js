var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.style.display = "none";
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).style.display = "block";
}