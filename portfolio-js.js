
// Typing effect 
const typingText = document.getElementById('typing-text');
const words = ['Vivekananda'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const word = words[wordIndex];
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingText.textContent = word.substring(0, charIndex);

  if (!isDeleting && charIndex === word.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 100 : 150);
  }
}
type();

// Contact form submission with alert and redirect
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Stop default submit

    const formData = new FormData(this);

    // Submit using fetch to FormSubmit.co
    fetch(this.action, {
      method: this.method,
      body: formData
    }).then(response => {
      if (response.ok) {
        alert('Thanks for contacting me! I will reach out to you soon.');
        this.reset();
        window.location.href = 'thank-you.html'; // Redirect after success
      } else {
        alert('Something went wrong. Please try again!');
      }
    }).catch(() => {
      alert('Something went wrong. Please try again!');
    });
  });
}

