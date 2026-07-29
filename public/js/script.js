import { openChatCaptions } from "./data.js";


 emailjs.init("kh1KPpWeOIFUwYRN-");

console.log("1");
const contactForm = document.getElementById("contact-form");

console.log(contactForm);

const carousel = document.getElementById("openChatCarousel");

console.log(carousel);

console.log("2");

const title = document.getElementById("caption-title");

console.log("3");

const description = document.getElementById("caption-description");

console.log("4");

const copyEmail = document.getElementById("copy-email");

console.log("5");

const sendBtn = document.getElementById("send-btn");
console.log("6");


carousel.addEventListener("slid.bs.carousel", function (event) {
   const current = openChatCaptions[event.to];
   console.log(current);

    title.textContent = current.title;

    description.textContent = current.description;
});


copyEmail.addEventListener("click", async () => {

    const email = document
                    .getElementById("email-address")
                    .textContent
                    .trim();

    try{

        await navigator.clipboard.writeText(email);

        showToast(

    "success",

    "Email copied",

    "The email address has been copied to your clipboard."

);

    }

    catch(err){

        console.error(err);

    }

});

function showToast(type, title, message){

    const toast = document.getElementById("toast");

    const icon = document.getElementById("toast-icon");

    const toastTitle = document.getElementById("toast-title");

    const toastMessage = document.getElementById("toast-message");

    toast.classList.remove("show");

    toastTitle.textContent = title;

    toastMessage.textContent = message;

    if(type==="success"){

        icon.className="fa-solid fa-diamond";

    }

    else{

        icon.className="fa-solid fa-triangle-exclamation";

    }

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },3500);

}
//=========== EMAIL JS ============

contactForm.addEventListener("submit", function(e){

    e.preventDefault();//without this browser refreshes immediately and email is never sent
    
    sendBtn.disabled=true;

    sendBtn.innerHTML=`Sending...`;

    emailjs.sendForm(
    "service_2d6od5e",
    "template_tdn5ryc",
    contactForm
)
.then(() => {

     showToast(

    "success",

    "Thanks for reaching out!",

    "Your message is on its way to my inbox. I'll get back to you as soon as I can."

);
    console.log("SUCCESS!");
    sendBtn.disabled = false;

     sendBtn.innerHTML = `
        Send Message
        <i class="fa-solid fa-arrow-right"></i>
    `;
    
    contactForm.reset();
})
.catch((error) => {

    console.log(error);

    showToast(

    "error",

    "Message couldn't be sent",

    "Please try again in a few moments or contact me directly via email."

);

    sendBtn.disabled = false;

    sendBtn.innerHTML = `
        Send Message
        <i class="fa-solid fa-arrow-right"></i>
    `;

});
    

    console.log("Form Submitted");

});
