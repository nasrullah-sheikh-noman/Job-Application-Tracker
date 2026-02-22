const buttons = document.querySelectorAll(".bt");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    buttons.forEach((b) => b.classList.remove("active"));
    buttons.forEach((b) => b.classList.remove("btn-primary"));

    this.classList.add("active");
    this.classList.add("btn-primary");
  })
});

console.log("btn");