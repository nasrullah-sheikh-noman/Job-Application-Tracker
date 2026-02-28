const deletes = document.querySelectorAll(".delete-btn");

const jobId = document.getElementById("job-quantity");
const upJobId = document.getElementById("up-job-quantity");

deletes.forEach((dt) => {
  dt.addEventListener("click", function () {
    const card = this.closest(".card");
    card.remove();

    if (card.classList.contains("interview")) {
      const interview = document.querySelectorAll(".interview").length;
      const hederInterviewCount = document.getElementById("header-interview");
      hederInterviewCount.innerText = interview;
      jobId.innerText = interview;
      upJobId.innerText -= 1;
      if(interview === 0) {
        blankPage.classList.remove("hidden");
      }
    }
    else if (card.classList.contains("rejected")) {
      const rejected = document.querySelectorAll(".rejected").length;
      const hederRejectedCount = document.getElementById("header-rejected");
      hederRejectedCount.innerText = rejected;
      jobId.innerText = rejected;
      upJobId.innerText -= 1;
      if(rejected === 0) {
        blankPage.classList.remove("hidden");
      }
    }
    else {
      const cardLeft = document.querySelectorAll(".card").length;
      jobId.innerHTML = cardLeft;
      upJobId.innerHTML = cardLeft;
      if(cardLeft === 0) {
        blankPage.classList.remove("hidden");
      }
    }

    upJobId.innerHTML = cardLeft;

  
    
  })
})