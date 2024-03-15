const bioToggle = document.querySelector(".bio__toggle");
const bioDisplay = document.querySelectorAll(".bio__display");

bioToggle.addEventListener("click", () => {
  bioDisplay.forEach((display) => {
    // display.style.visibility = "visible";
    display.classList.toggle("bio__display");
  });
});
