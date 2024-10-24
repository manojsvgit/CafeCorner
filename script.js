// Smooth scrolling when clicking on a category
document.querySelectorAll(".category-btn").forEach((button) => {
  button.addEventListener("click", function (event) {
      // Prevent default anchor behavior
      event.preventDefault();

      // Get the target section's ID from the href
      const targetID = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetID);

      // Ensure the section exists before trying to scroll
      if (targetSection) {
          // Scroll to the section smoothly
          targetSection.scrollIntoView({
              behavior: "smooth",
          });
      }
  });
});

// Get all sections and buttons
const sections = document.querySelectorAll("section");
const buttons = document.querySelectorAll(".category-btn");

// Create an Intersection Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      // If the section is in view, find the corresponding button
      const button = document.querySelector(`.category-btn[href="#${entry.target.id}"]`);
      if (entry.isIntersecting) {
          button.classList.add("active");
      } else {
          button.classList.remove("active");
      }
  });
}, { threshold: 0.5 }); // Trigger when 50% of section is in view

// Observe each section
sections.forEach(section => {
  observer.observe(section);
});
