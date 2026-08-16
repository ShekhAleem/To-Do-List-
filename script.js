 const inputBox = document.getElementById("input-box");
 const listContainer = document.getElementById("list-container");

const dateBox = document.getElementById("date-box");
let editTask = null;

function addTask() {

    if (inputBox.value === '') {
        alert("You must write something!");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML =
    '<span class="task-text">' + inputBox.value + '</span>' +
    '<small class="task-date">' + dateBox.value + '</small>';

    // Edit button
    let editBtn = document.createElement("button");
    editBtn.innerHTML = "✏️";
    editBtn.className = "edit-btn";
    li.appendChild(editBtn);

    // Delete button
    let deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = "\u00d7";
    deleteBtn.className = "delete-btn";
    li.appendChild(deleteBtn);

    listContainer.appendChild(li);

    inputBox.value = "";
    dateBox.value = "";

    saveData();
}

listContainer.addEventListener("click", function(e) {

    // Complete / Uncomplete task
    if (e.target.tagName === "LI") {

    e.target.classList.toggle("checked");

    saveData();
}

    // Delete task
    else if (e.target.tagName === "SPAN") {

        e.target.parentElement.remove();

        saveData();
    }

    // Edit task
    else if (e.target.classList.contains("edit-btn")) {

        let li = e.target.parentElement;

        let taskText = li.querySelector(".task-text").textContent;

        let taskDate = li.querySelector(".task-date").textContent;

        inputBox.value = taskText;

        dateBox.value = taskDate;

        li.remove();

        saveData();
    }

}, false);

 function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
 }

 function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
 }
 showTask();