const buttons = document.querySelectorAll(".interview-btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {

    const headerInterview = document.getElementById("header-interview");
    const interviewCount = headerInterview.innerHTML;
    const newCount = Number(interviewCount) + 1;
    headerInterview.innerText = newCount;
    
  }, {once: true});
});