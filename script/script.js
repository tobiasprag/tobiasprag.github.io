const bioToggle = document.querySelector(".bio__toggle");
const bioDisplay = document.querySelectorAll(".bio__display");

bioToggle.addEventListener("click", () => {
  bioDisplay.forEach((display) => {
    display.classList.toggle("bio__show");
  });
});
