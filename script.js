// Smooth scrolling when clicking on a category
document.querySelectorAll(".category-btn").forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const targetID = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetID);
  
      // Scroll to the section smoothly
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  