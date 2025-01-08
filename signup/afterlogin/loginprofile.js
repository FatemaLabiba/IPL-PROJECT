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