// Reservation form submission
document.getElementById("reservationForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Table reserved! See you soon 🍽️");
});

// Lightbox for image gallery
function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  img.src = src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
// Add this to script.js
window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll("section");
  elements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});
document.getElementById("newsletterForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thanks for subscribing to TasteBuds!");
});
