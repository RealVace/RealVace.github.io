// JavaScript to toggle between light and dark theme
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById('theme-toggle'); // Find the button by ID
  const body = document.body; // Get the body element

  // Check the saved theme from localStorage and apply it
  if (localStorage.getItem('theme') === 'dark') {
    body.setAttribute('data-theme', 'dark');
  }

  // Add event listener for the theme toggle button
  toggleButton.addEventListener('click', () => {
    // Toggle the theme between light and dark
    if (body.getAttribute('data-theme') === 'dark') {
      body.removeAttribute('data-theme'); // Switch to light mode
      localStorage.setItem('theme', 'light');
    } else {
      body.setAttribute('data-theme', 'dark'); // Switch to dark mode
      localStorage.setItem('theme', 'dark');
    }
  });
});

// Scroll to top button functionality
document.addEventListener("DOMContentLoaded", () => {
  const scrollToTopButton = document.getElementById("scroll-to-top");

  // Show the button when scrolled down 200px
  window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollToTopButton.classList.add("visible");
    } else {
      scrollToTopButton.classList.remove("visible");
    }
  };

  // Smooth scroll to the top
  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

