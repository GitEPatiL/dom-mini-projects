let input = document.querySelector("#input");
let addBtn = document.querySelector(".addBtn");
let userTasks = document.querySelector(".userTasks");

const addTask = () => {
  let value = input.value;

  if (value === "") return;

  let li = document.createElement("li");

  li.innerHTML = `
    ${value}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button class="deleteBtn">del</button>
    `;
  userTasks.append(li);

  input.value = "";
};

addBtn.addEventListener("click", addTask);

userTasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteBtn")) {
    e.target.parentElement.remove();
  }
});
