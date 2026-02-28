const deletes = document.querySelectorAll(".delete-btn");

const jobId = document.getElementById("job-quantity");

deletes.forEach((dt) => {
  dt.addEventListener("click", function () {
    const card = this.closest(".card");
    card.remove();
    
      if (cards.classList.contains("interview")) {
        deleteBtn.addEventListener("click", function () {
          const newJobCount = jobId.innerHTML;
          jobId.innerHTML = Number(newJobCount) - 1;
        })
      }
      else   if (cards.classList.contains("rejected")) {
        deleteBtn.addEventListener("click", function () {
          const newJobCount = jobId.innerHTML;
          jobId.innerHTML = Number(newJobCount) - 1;
        })
      }
      else {
        const cardLeft = document.querySelectorAll(".card").length;
        jobId.innerHTML = cardLeft;
      }

  
  })
})