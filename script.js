
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}



let sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}



const scriptURL = 'https://script.google.com/macros/s/AKfycbwF-VtTTEk6DWL26euY4VTAe8CQsRjSJhSaIYHfNqX3xJvUrfDPa7ZNNJLT9UjIyJhafQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})



let typed = new Typed(".multiple-text", {
    strings: ["Full Stack Web Developer", "Youtuber", "Tamil Teacher", "Content creator"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})


const sr = ScrollReveal({
    distance: '45px',
    duration: 2700,
    reset: true
})
sr.reveal('.header-text', { delay: 350, origin: 'left' })
        //    sr.reveal('.header-img',{delay:550, origin:'right'})
        // sr.reveal('#about,#services,#portfolio,#contact', { delay: 100, origin: 'bottom' })
