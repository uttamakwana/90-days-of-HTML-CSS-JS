const btn = document.getElementById("btn")
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".close-btn");
const closeBtn2 = document.getElementById("close-btn")

btn.addEventListener("click", function() {
    popup.classList.add('show');
})

closeBtn.addEventListener("click", function() {
    alert("Do you really want to remove")
    popup.classList.remove("show");
})

closeBtn2.addEventListener("click", function() {
    popup.classList.remove("show");
})