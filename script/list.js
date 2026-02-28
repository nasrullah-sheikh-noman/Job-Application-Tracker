const allListBtn = document.getElementById("all-list");
const interviewListBtn = document.getElementById("interview-list");
const rejectedListBtn = document.getElementById("rejected-list");
const allListContainer = document.getElementById("allList");
const blankPage = document.getElementById("blank-page");
const jobQuantity = document.getElementById("job-quantity");
const deleteBtn = document.getElementById("delete-btn");

const cards = document.querySelectorAll("#allList .card");

function toggleBlankPage() {
  const visibleCards = Array.from(cards).filter(card => !card.classList.contains("hidden"));
  if (visibleCards.length === 0) {
    blankPage.classList.remove("hidden");
  }
  else {
    blankPage.classList.add("hidden");
  }
}

allListBtn.addEventListener("click", function () {
  cards.forEach(card => card.classList.remove("hidden"));
  
  allListContainer.classList.remove("hidden");

  
      document.getElementById("job-quantity").innerText = 8;

  toggleBlankPage();

});

interviewListBtn.addEventListener("click", function () {
  cards.forEach(card => card.classList.add("hidden"));

  const quantity = document.getElementById("job-quantity");
  quantity.innerText = 0;

  cards.forEach(card => {
    if (card.classList.contains("interview")) {
      card.classList.remove("hidden");
      const newQuantity = quantity.innerText;
      quantity.innerText = Number(newQuantity) + 1;
      
    }
  })

  allListContainer.classList.remove("hidden");


  toggleBlankPage();
  console.log("click");

});

rejectedListBtn.addEventListener("click", function () {
  cards.forEach(card => card.classList.add("hidden"));

  const quantity = document.getElementById("job-quantity");
  quantity.innerText = 0;

  cards.forEach(card => {
    if (card.classList.contains("rejected")) {
      card.classList.remove("hidden");
      const newQuantity = quantity.innerText;
      quantity.innerText = Number(newQuantity) + 1;

    }
  })


  allListContainer.classList.remove("hidden");



  toggleBlankPage();
  console.log("click 2");
});
