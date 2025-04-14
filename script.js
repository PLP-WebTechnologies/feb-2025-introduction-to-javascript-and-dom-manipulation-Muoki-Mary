// Change text content dynamically
document.getElementById("changeTextBtn").addEventListener("click", function () {
  document.getElementById("intro-text").textContent =
    "The text has been changed dynamically! 🎉";
});

// Modify CSS styles via JavaScript
document
  .getElementById("changeStyleBtn")
  .addEventListener("click", function () {
    const introText = document.getElementById("intro-text");
    introText.classList.toggle("text-changed");
  });

// Add or remove an element when the button is clicked
document
  .getElementById("toggleElementBtn")
  .addEventListener("click", function () {
    const newElement = document.getElementById("new-element");

    if (newElement.classList.contains("hidden")) {
      newElement.classList.remove("hidden");
    } else {
      newElement.classList.add("hidden");
    }
  });
