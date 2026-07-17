/*==========================================================
VISHAL DHAYAL PORTFOLIO
SCRIPT.JS
PART 1
==========================================================*/

/*==============================
LOADER
==============================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }

});

/*==============================
STICKY HEADER
==============================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.background = "rgba(5,8,22,.88)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    }

    else{

        header.style.background = "rgba(5,8,22,.55)";
        header.style.boxShadow = "none";

    }

});

/*==============================
SCROLL ANIMATION
==============================*/

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.15

});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("fade-up");

observer.observe(section);

});

/*==============================
SMOOTH ACTIVE NAVIGATION
==============================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/*==============================
BACK TO TOP
==============================*/

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.className="top-btn";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.classList.add("show");

}

else{

topButton.classList.remove("show");

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*==============================
CURRENT YEAR
==============================*/

const year=document.querySelector(".current-year");

if(year){

year.textContent=new Date().getFullYear();

}/*==========================================================
SCRIPT.JS
PART 2
==========================================================*/

/*==============================
DARK / LIGHT MODE
==============================*/

const themeToggle = document.getElementById("theme-toggle");

let darkMode = true;

if(themeToggle){

themeToggle.addEventListener("click",()=>{

darkMode = !darkMode;

if(darkMode){

document.body.classList.remove("light-mode");

themeToggle.innerHTML="☀";

}

else{

document.body.classList.add("light-mode");

themeToggle.innerHTML="🌙";

}

});

}

/*==============================
MOBILE MENU
==============================*/

const menuButton=document.querySelector(".menu-toggle");

const navMenu=document.querySelector(".nav-menu");

if(menuButton){

menuButton.addEventListener("click",()=>{

navMenu.classList.toggle("open");

menuButton.classList.toggle("active");

});

}

document.querySelectorAll(".nav-menu a").forEach(link=>{

link.addEventListener("click",()=>{

navMenu.classList.remove("open");

menuButton.classList.remove("active");

});

});

/*==============================
PARALLAX HERO
==============================*/

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

const offset=window.pageYOffset;

if(hero){

hero.style.backgroundPositionY=offset*.4+"px";

}

});

/*==============================
PROFILE IMAGE FLOAT
==============================*/

const profile=document.querySelector(".profile-frame");

window.addEventListener("mousemove",(e)=>{

if(!profile) return;

const x=(window.innerWidth/2-e.clientX)/40;

const y=(window.innerHeight/2-e.clientY)/40;

profile.style.transform=`rotateY(${x}deg) rotateX(${-y}deg)`;

});

window.addEventListener("mouseleave",()=>{

if(profile){

profile.style.transform="rotateY(0deg) rotateX(0deg)";

}

});

/*==============================
BUTTON RIPPLE EFFECT
==============================*/

document.querySelectorAll(".btn-primary,.btn-secondary,.btn-small").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.left=e.clientX-rect.left-size/2+"px";
ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});


/*==========================================================
SCRIPT.JS
PART 3 (FINAL)
==========================================================*/

/*==============================
GALLERY LIGHTBOX
==============================*/

const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.createElement("div");

lightbox.className = "lightbox";

lightbox.innerHTML = `
    <span class="lightbox-close">&times;</span>
    <img class="lightbox-image" src="" alt="">
`;

document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector(".lightbox-image");
const lightboxClose = lightbox.querySelector(".lightbox-close");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("show");

        lightboxImage.src = image.src;

    });

});

lightboxClose.addEventListener("click", () => {

    lightbox.classList.remove("show");

});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.classList.remove("show");

    }

});

/*==============================
TYPING EFFECT
==============================*/

const typingElement = document.querySelector(".hero h2");

if (typingElement) {

    const text = typingElement.innerHTML.replace(/<br>/g, " ");

    typingElement.innerHTML = "";

    let i = 0;

    function typeWriter() {

        if (i < text.length) {

            typingElement.innerHTML += text.charAt(i);

            i++;

            setTimeout(typeWriter, 45);

        }

    }

    typeWriter();

}

/*==============================
COUNTER ANIMATION
==============================*/

const counters = document.querySelectorAll("[data-count]");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = Number(counter.dataset.count);

        let value = 0;

        const speed = target / 80;

        function updateCounter() {

            value += speed;

            if (value < target) {

                counter.innerText = Math.floor(value);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target;

            }

        }

        updateCounter();

        counterObserver.unobserve(counter);

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/*==============================
NAVBAR ACTIVE SHADOW
==============================*/

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("mouseenter", () => {

        link.style.textShadow = "0 0 12px #4f8cff";

    });

    link.addEventListener("mouseleave", () => {

        link.style.textShadow = "none";

    });

});

/*==============================
PREVENT IMAGE DRAG
==============================*/

document.querySelectorAll("img").forEach(img => {

    img.setAttribute("draggable", "false");

});

/*==============================
CONSOLE MESSAGE
==============================*/

console.clear();

console.log("%cWelcome to Vishal Dhayal's Portfolio",
"color:#4f8cff;font-size:20px;font-weight:bold;");

console.log("%cDesigned with HTML, CSS & JavaScript",
"color:#00d4ff;font-size:14px;");

/*==========================================================
END OF FILE
==========================================================*//*==============================
BOOK PURCHASE MODAL
==============================*/

const buyBookBtn = document.getElementById("buyBookBtn");
const bookModal = document.getElementById("bookModal");
const closeBookModal = document.querySelector(".close-book-modal");

if (buyBookBtn && bookModal) {

    buyBookBtn.addEventListener("click", () => {

        bookModal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

}

if (closeBookModal) {

    closeBookModal.addEventListener("click", () => {

        bookModal.classList.remove("active");

        document.body.style.overflow = "auto";

    });

}

window.addEventListener("click", (e) => {

    if (e.target === bookModal) {

        bookModal.classList.remove("active");

        document.body.style.overflow = "auto";

    }

});

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        bookModal.classList.remove("active");

        document.body.style.overflow = "auto";

    }

});/*=====================================
CENTRIGO MODAL
=====================================*/

const centrigoBtn = document.getElementById("centrigoBtn");
const centrigoModal = document.getElementById("centrigoModal");
const closeCentrigo = document.getElementById("closeCentrigo");

if (centrigoBtn && centrigoModal && closeCentrigo) {

    centrigoBtn.addEventListener("click", function (e) {
        e.preventDefault();
        centrigoModal.classList.add("active");
    });

    closeCentrigo.addEventListener("click", function () {
        centrigoModal.classList.remove("active");
    });

    window.addEventListener("click", function (e) {
        if (e.target === centrigoModal) {
            centrigoModal.classList.remove("active");
        }
    });

}/*=========================================
CONTACT FORM - EMAILJS
=========================================*/

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    const sendBtn = document.getElementById("sendBtn");

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        sendBtn.disabled = true;
        sendBtn.innerHTML = "Sending...";

        const templateParams = {
            from_name: document.querySelector('[name="from_name"]').value.trim(),
            from_email: document.querySelector('[name="from_email"]').value.trim(),
            subject: document.querySelector('[name="subject"]').value.trim(),
            message: document.querySelector('[name="message"]').value.trim()
        };

        emailjs.send(
    "service_c40jqru",
    "template_qp0jjoj",
    templateParams
)
        .then(function () {

            alert("✅ Message sent successfully!");

            contactForm.reset();

            sendBtn.disabled = false;
            sendBtn.innerHTML = "Send Message";

        })

        .catch(function (error) {

            console.error("EmailJS Error:", error);

            alert(
                "Failed to send message.\n\n" +
                (error.text || error.message || JSON.stringify(error))
            );

            sendBtn.disabled = false;
            sendBtn.innerHTML = "Send Message";

        });

    });

}