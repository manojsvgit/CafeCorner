// Smooth scrolling when clicking on a category button
document.querySelectorAll(".category-btn").forEach((button) => {
  button.addEventListener("click", function (event) {
    // Prevent default anchor behavior
    event.preventDefault();

    // Get the target section's ID from the href attribute
    const targetID = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetID);

    // Ensure the section exists before trying to scroll
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start", // Aligns the section to the top of the viewport
      });
    }
  });
});

// Get all sections and buttons
const observedSections = document.querySelectorAll("div[id]");
const buttons = document.querySelectorAll(".category-btn");

// Create an Intersection Observer to monitor sections in view
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const button = document.querySelector(`.category-btn[href="#${entry.target.id}"]`);

      if (entry.isIntersecting) {
        // Remove the 'active' class from all buttons
        buttons.forEach((btn) => btn.classList.remove("active"));

        // Add 'active' class to the current button
        button.classList.add("active");
      }
    });
  },
  { threshold: 0.5 } // Trigger when 50% of the section is in view
);

// Observe all sections by their ID-containing divs
observedSections.forEach((section) => observer.observe(section));
