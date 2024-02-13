// Get the elements
const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar-links");

// Add event listener for toggle button
toggleButton.addEventListener("click", function () {
  // Toggle the active class on navbar links
  navbarLinks.classList.toggle("active");
});
