// setting up the variables
let userTask = document.querySelector(".text");

let btn = document.querySelector(".add");

let taks = document.querySelector(".tasks");

// window.localStorage.clear();

// ACTION EVENT:

function restore() {
  if (window.localStorage.getItem("id")) {
    let batch = window.localStorage.getItem("id");
    let taskArr = batch.split(",");

    for (let i = 0; i < taskArr.length; i++) {
      Create(taskArr[i]);
    }
  }
}
restore();
btn.addEventListener("click", function () {
  // verifying that the input isn't empty to make actions
  if (Verify() === true) {
    let val = userTask.value;
    let cont = window.localStorage.getItem("id");
    let taskArr = cont ? cont.split(",") : [];
    taskArr.push(val);
    window.localStorage.setItem("id", taskArr.join(","));
    Create();
    Checked();
    if (taks.innerHTML !== "") {
      let dell = document.querySelectorAll(".del");
      dell.forEach((dell) => {
        dell.onclick = function () {
          clear(dell);
          dell.parentElement.remove();
        };
      });
    }
  } else {
    return Verify();
  }
});

Checked();
delEt();
// functions:

// verifying that the input isn't empty:

function Verify() {
  let val = userTask.value;
  return val === ""
    ? userTask.setAttribute("placeholder", "Invalid String??")
    : true;
}

// create the elements task inside the task div:

function Create(ben) {
  let val = ben ? ben : userTask.value;
  let parent = document.querySelector(".tasks");
  let div = document.createElement("div");
  let label = document.createElement("label");
  let btn2 = document.createElement("button");
  let text = document.createElement("text");
  let del = document.createElement("button");
  text.textContent = val;
  parent.appendChild(div);
  div.setAttribute("data-task", "tsk");
  div.setAttribute("class", "ctSk");
  div.appendChild(label);
  label.appendChild(btn2);
  btn2.setAttribute("class", "tsTex");
  text.setAttribute("class", "tXt");
  label.appendChild(text);
  div.appendChild(del);
  del.setAttribute("class", "del");
  del.textContent = "Delete";
  userTask.value = "";
}

// to delete the element from the task div or task list:

function clear(dell) {
  let cont = window.localStorage.getItem("id");

  let taskArr = cont ? cont.split(",") : [];

  let taskText = dell.parentElement.innerText.slice(0, -7);

  let index = taskArr.indexOf(taskText);

  if (index !== -1) {
    taskArr.splice(index, 1);
    window.localStorage.setItem("id", taskArr.join(","));
    console.log("done", taskArr);
  } else {
    console.log("not found");
    console.log(taskText);
    console.log(taskArr);
  }
}

// delete the element from the task

function delEt() {
  if (taks.innerHTML !== "") {
    let dell = document.querySelectorAll(".del");
    dell.forEach((dell) => {
      dell.onclick = function () {
        clear(dell);
        dell.parentElement.remove();
      };
    });
  }
}
function Checked() {
  let check = document.querySelectorAll(".tsTex");
  let checked = false;
  check.forEach((checks) => {
    checks.addEventListener("click", function () {
      if (checked === false) {
        checked = true;
        checks.style.backgroundColor = "#d3d3d3";
        checks.parentElement.parentElement.style.backgroundColor = "#000000ad";
        checks.parentElement.querySelector(".tXt").style.textDecoration =
          "line-through";
        checks.parentElement.querySelector(".tXt").style.color = "gray";
      } else {
        checked = false;
        checks.style.backgroundColor = "transparent";
        checks.parentElement.parentElement.style.backgroundColor = "black";
        checks.parentElement.querySelector(".tXt").style.textDecoration =
          "none";
        checks.parentElement.querySelector(".tXt").style.color = "#12cdc2";
      }
    });
  });
}
