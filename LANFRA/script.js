// Select the button
const toggleBtn = document.querySelector(".menu-toggle"); 
const navList = document.querySelector(".nav-list");

function toggleMenu() {
    navList.classList.toggle("active");
}

toggleBtn.addEventListener("click", toggleMenu);


const heroBgSlides = [ 
    {
        image: "images/bg-img-1.jpg",
        title: "Welcome to our community!",
        text: "Connecting Liberians in <span class='highlight highlight-primary'>Normandie and beyond</span>."
    },
    {
        image: "images/bg-img-2.jpg",
        title: "Join us today!",
        text: "Be part of an amazing community focused on unity, culture, and growth."
    },
    {
        image: "images/bg-img-3.jpg",
        title: "Empowering the Future!",
        text: "Empowering <span class='highlight-red'>unity,</span> <span class='highlight-white'>culture,</span> and <span class='highlight-blue'>growth</span> for the Liberian community in Normandie!"
    }
    
];

let currentIndex = 0;
const heroSection = document.querySelector("#hero");
const heroTitle = document.querySelector("#heroTitle");
const heroText = document.querySelector("#heroText");
const previewBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

function updateHero(index) {
    heroSection.style.backgroundImage = `url(${heroBgSlides[index].image})`;
    heroTitle.innerHTML = heroBgSlides[index].title;
    heroText.innerHTML = heroBgSlides[index].text;
}

// Auto slide every 5 seconds
function autoBgSlide() {
    currentIndex = (currentIndex + 1) %  heroBgSlides.length;
    updateHero(currentIndex);
}

// Manual navigation

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1 ) % heroBgSlides.length;
    updateHero(currentIndex);
});

previewBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + heroBgSlides.length) % heroBgSlides.length;
    updateHero(currentIndex);
});

// Start auto sliding
const DISPLAY_DURATION = 5000;
setInterval(autoBgSlide, DISPLAY_DURATION);

// Initialize first slide
updateHero(currentIndex);


// Select the necessary elements
const Form = document.querySelector("#newsletterForm")
const emailInput = document.querySelector("#Newsletter-email");

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


// Function to clear previous errors
function clearErrors() {
    const errorContainer = document.querySelector(".error-message");
if (errorContainer) {
    errorContainer.remove();
}
}

// Function to show error messages
function showErrors(message) {
clearErrors(); // Remove existing error message


const errorContainer = document.createElement("p");
errorContainer.classList.add("error-message");
errorContainer.style.color = "red";
errorContainer.style.fontSize = "14px";
errorContainer.textContent = message;

// Insert error message after the input field
emailInput.insertAdjacentText("afterend", errorContainer);
}

// Form submission event

Form.addEventListener("submit", e => {
    e.preventDefault(); // Prevent actual form submission

    clearErrors(); // Clear previous errors

    let emailValue = emailInput.value.trim();

    if (emailValue === "") {
        showErrors("Please enter an email.");
        return;
    }

    if (!emailPattern.test(emailValue)) {
        showErrors("Invalid email format. Example: name@example.com");
        return;
    }

 

 // Simulate success
 alert("Subscribed successfully! check your inbox.");
 emailInput.value = ""; // Clear input after successful subscription
});

// Membership validation

// Select the necessary Elements
// form, fullNameInput, emailInput, numberInput

const membershipForm = document.querySelector("#membership-form");
const fullNameField = document.querySelector("#full-name");
const emailField = document.querySelector("#email");
const phoneNum = document.querySelector("#phone");
const membershipType = document.querySelector("#membership-type");
const termsInput = document.querySelector("#termsCheckbox");

const emailPatternMembership = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

membershipForm.addEventListener('submit', e => {
preventDefault();
clearErrors()

const errorsMessages = [];

const fullName = fullNameField.value.trim();
const namePattern = /^[a-zA-Z]{3,}$/;

if (namePattern.test(fullName)) {
    errorsMessages.push("Full Name must be at least 3 characters and contain no spaces");
}

if (emailField === "") {
errorsMessages.push("Please enter an email.");
    return;
}

if (!emailPatternMembership.test(emailField)) {
    errorsMessages.push("Invalid email format. Example: name@example.com");
    return;
}

const phoneNumber = phoneNum.value.trim();
const phonePattern = /^\+?[0-9]{10,15}$/;

if (!phonePattern.test(phoneNumber)) {
    errorsMessages.push("Phone number must be at least 10 digits and contain only numbers.");
}

if (!membershipType.value) {
    errorsMessages.push("Selecting a membership-type is required");
}

if (!termsInput.checked) {
    errorsMessages.push("You must agree to the Terms and Conditions");
}


if (errorsMessages > 0) {
    showErrors(errorsMessages);
}

});


function clearErrors() {

}


function showErrors() {

}

    const backToTopBtn = document.getElementById("backToTopBtn");
    
    // Show the button when scrolled down
    
    if (backToTopBtn) {
    
        window.addEventListener('scroll', e => {
        backToTopBtn.classList.toggle("show", window.scrollY > 300);
    
    })
    
    
    backToTopBtn.addEventListener("click", e => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
    }


