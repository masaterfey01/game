// Watch trailer function
function playTrailer() {
    alert("The trailer is currently in production. Stay tuned!");
}

// Download game function
function downloadGame() {
    alert("Your download will start soon. Enjoy the adventure!");
}

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thanks for reaching out, ${name}! We'll get back to you soon.`);
    document.getElementById('contactForm').reset();
});
