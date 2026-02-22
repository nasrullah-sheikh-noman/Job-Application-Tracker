const allListBtn = document.getElementById("all-list");
const interviewListBtn = document.getElementById("interview-list");
const rejectedListBtn = document.getElementById("rejected-list");

allListBtn.addEventListener("click", function () {
  const allList = document.getElementById("allList");
  const blankPage = document.getElementById("blank-page");
  allList.classList.remove("hidden");
  blankPage.classList.add("hidden");
});
interviewListBtn.addEventListener("click", function () {
  const allList = document.getElementById("allList");
  const blankPage = document.getElementById("blank-page");
  allList.classList.add("hidden");
  blankPage.classList.remove("hidden");
});

rejectedListBtn.addEventListener("click", function () {
  const allList = document.getElementById("allList");
  const blankPage = document.getElementById("blank-page");
  allList.classList.add("hidden");
  blankPage.classList.remove("hidden");
});
