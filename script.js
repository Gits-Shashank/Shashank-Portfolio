// Typing Effect
const text = "Frontend Developer";
let index = 0;
let typingElement = document.getElementById("typing");
let isDeleting = false;

function typeEffect() {
  typingElement.innerHTML = text.substring(0, index);
  if (!isDeleting && index < text.length) {
    index++;
  } else if (isDeleting && index > 0) {
    index--;
  }

  if (index === text.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  } else if (index === 0 && isDeleting) {
    isDeleting = false;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 150);
}
typeEffect();

// Live Time with Day, Date, Time
function updateTime() {
  const now = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  document.getElementById('live-time').textContent = now.toLocaleString('en-IN', options);
}
setInterval(updateTime, 1000);
updateTime();

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

function sendMessage(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const fullMessage = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`;

  // ✅ Replace your WhatsApp number here
  const yourWhatsAppNumber = "917080849355";

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${yourWhatsAppNumber}&text=${encodeURIComponent(fullMessage)}`;

  window.location.href = whatsappUrl;
}
  
// Hamburger Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
