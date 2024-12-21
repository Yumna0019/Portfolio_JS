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

var sidemeu = document.getElementById("sidemenu");

function openmenu(){
    sidemeu.style.right = "0";
}

function closemenu(){
    sidemeu.style.right = "-150px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxnrdAy8cGkms5rafhERO6bSVONhVZ0qIvRzGjv-tvD0leI4zTE7LtvZoEmWByE0ldv/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    
    msg.textContent = "Submitting...";

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.textContent = "Message sent successfully"; 
            setTimeout(() => {
                msg.textContent = ""; 
            }, 5000);
            form.reset(); 
        })
        .catch(error => {
            console.error('Error!', error.message);
            msg.textContent = "Failed to send message. Please try again.";
        });
});
