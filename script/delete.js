const deletes = document.querySelectorAll(".delete-btn");

const jobId = document.getElementById("job-quantity");
const upJobId = document.getElementById("up-job-quantity");

deletes.forEach((dt) => {
  dt.addEventListener("click", function () {
    const card = this.closest(".card");
    card.remove();

      const interview = document.querySelectorAll(".interview").length;
      const hederInterviewCount = document.getElementById("header-interview");
      hederInterviewCount.innerText = interview;

      const rejected = document.querySelectorAll(".rejected").length;
      const hederRejectedCount = document.getElementById("header-rejected");
      hederRejectedCount.innerText = rejected;


    const cardLeft = document.querySelectorAll(".card").length;
    jobId.innerHTML = cardLeft;

    upJobId.innerHTML = cardLeft;

  
    
  })
})