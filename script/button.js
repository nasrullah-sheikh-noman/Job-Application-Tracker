document.querySelectorAll(".card .actions button").forEach((btn) => {
  btn.addEventListener("click", function () {
    const card = this.closest(".card");

    const statusBtn = card.querySelector(".status-btn");

    if (card.classList.contains("locked")) return;

    if (this.classList.contains("interview-btn")) {

      const headerInterview = document.getElementById("header-interview");
      const interviewCount = headerInterview.innerHTML;
      const newCount = Number(interviewCount) + 1;
      headerInterview.innerText = newCount;

      statusBtn.innerText = "Applied";
      statusBtn.classList = "btn btn-success";

      card.style.borderLeft = " 5px solid green";
      card.style.transition = ".3s ease-in-out";

    } else if (this.classList.contains("reject-btn")) {

      const headerRejected = document.getElementById("header-rejected");
      const rejectCount = headerRejected.innerHTML;
      const newCount = Number(rejectCount) + 1;
      headerRejected.innerText = newCount;

      statusBtn.innerText = "Rejected";
      statusBtn.classList = "btn btn-error";

      card.style.borderLeft = " 5px solid red";
      card.style.transition = ".3s ease-in-out";
    }

    card.classList.add("locked");
  });
});
