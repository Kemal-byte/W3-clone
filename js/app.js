const buttons = document.querySelectorAll("[data-caraousel-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(`somehtihng is clicked.`);
  });
});
