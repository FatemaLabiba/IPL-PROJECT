function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
  }
  /*dropdowndbrowser*/

  // Toggle dropdown menu on click
  function toggleDropdown(event) {
    event.preventDefault();
    const dropdownContent = event.target.nextElementSibling;
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
  }

  // Close dropdown if clicking outside
  window.addEventListener("click", function (e) {
    const dropdowns = document.querySelectorAll(".dropdown-content");
    dropdowns.forEach((dropdown) => {
      if (!e.target.matches(".dropbtn") && !dropdown.contains(e.target)) {
        dropdown.style.display = "none";
      }
    });
  });

  /*front page*/

/*book slider*/

const track = document.querySelector('.slider-track');
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const totalSlides = slides.length;

  let currentSlide = 0;

  function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
  }

  function moveSlide(direction) {
    currentSlide += direction;

    if (currentSlide < 0) {
      currentSlide = totalSlides - 1; // Wrap to the last slide
    } else if (currentSlide >= totalSlides) {
      currentSlide = 0; // Wrap to the first slide
    }

    const offset = currentSlide * -100; // Calculate offset
    track.style.transform = `translateX(${offset}%)`;
    updateDots();
  }
