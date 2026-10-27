
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("formStatus");

    if (name.length < 2 || message.length < 10) {
      status.textContent = "Please enter a valid name and a message of at least 10 characters.";
      status.style.color = "#ff8585";
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      status.textContent = "Please enter a valid email address.";
      status.style.color = "#ff8585";
      return;
    }

    status.textContent = `Thanks, ${name}! Your demo form was validated successfully. No message was sent.`;
    status.style.color = "#38e8ff";
    contactForm.reset();
  });
}
