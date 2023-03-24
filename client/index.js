const newButton = document.querySelector("#new-button");

function newDiary() {
    window.location.href = "./create.html";
};


newButton.addEventListener("click", newDiary);