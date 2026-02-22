const deletes = document.querySelectorAll(".delete-btn");

const jobId = document.getElementById("job-quantity");

deletes.forEach((dt) => {
  dt.addEventListener("click", function () {
    const card = this.closest(".card");
    card.remove();

    const cardLeft = document.querySelectorAll(".card").length;
    console.log(cardLeft);
    jobId.innerHTML = cardLeft;
  })
})