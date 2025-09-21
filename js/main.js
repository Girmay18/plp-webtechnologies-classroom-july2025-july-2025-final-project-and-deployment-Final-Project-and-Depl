// Contact form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Form submitted successfully!");
      form.reset();
    });
  }

  // Image Slider
  const slides = document.querySelectorAll(".slides img");
  const dots = document.querySelectorAll(".dot");
  let current = 0;

  if (slides.length > 0) {
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove("active");
        dots[i].classList.remove("active");
        if (i === index) {
          slide.classList.add("active");
          dots[i].classList.add("active");
        }
      });
    }

    function nextSlide() {
      current = (current + 1) % slides.length;
      showSlide(current);
    }

    setInterval(nextSlide, 4000);

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        current = i;
        showSlide(current);
      });
    });
  }
});
