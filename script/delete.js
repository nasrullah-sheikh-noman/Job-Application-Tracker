const deletes = document.querySelectorAll(".delete-btn");

const jobId = document.getElementById("job-quantity");
const upJobId = document.getElementById("up-job-quantity");

deletes.forEach((dt) => {
  dt.addEventListener("click", function () {
    const card = this.closest(".card");
    card.remove();
    
        const cardLeft = document.querySelectorAll(".card").length;
        jobId.innerHTML = cardLeft;

        upJobId.innerHTML = cardLeft;


  
  })
})