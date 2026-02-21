document.querySelectorAll(".card button").forEach((btn) => {
  btn.addEventListener("click", function () {
    const card = this.parentElement;

    if (card.classList.contains("locked")) return;

    const btntext = document.querySelectorAll(".btntext");

    if (this.classList.contains("interview-btn")) {
      const headerInterview = document.getElementById("header-interview");
      const interviewCount = headerInterview.innerHTML;
      const newCount = Number(interviewCount) + 1;
      headerInterview.innerText = newCount;

      btntext.innerText = "Applied";
    } 
    else if (this.classList.contains("reject-btn")) {
      const headerRejected = document.getElementById("header-rejected");
      const rejectCount = headerRejected.innerHTML;
      const newCount = Number(rejectCount) + 1;
      headerRejected.innerText = newCount;
    }

    this.classList.add("locked");

    card.querySelectorAll("button").forEach(b => (b.disabled = true));
  });
});
