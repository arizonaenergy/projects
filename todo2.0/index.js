let todoItems = [];
function addTodo(text) {
  let todo = {
    text,
    checked: false,
    id: Date.now(),
  };
  todoItems.push(todo);
  console.log(todoItems);
}
let form = document.querySelector(".js-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let input = document.querySelector("js.todo-input");
  let text = input.value.trim();
  if (text !== "") {
    addTodo(text);
    input.value = "";
    input.focus();
  }
});
let todo = {
  text,
  checred: false,
  id: Date.now(),
};
todoItems.push(todo);
console.log(todoItems);
function renderTodo(todo) {
  let list = document.querySelector(".js-todo-list");
  let isChecked = todo.checked ? "done" : "";
  let node = document.createElement("li");
  node.setAttribute("class", `todo-item ${isChecked}`);
  node.setAttribute("data-key", todo.id);
  node.innerHTML = `
  <input id="${todo.id}" type="checkbox"/>
  <label for="${todo.id}" class="tick js-tick"></label>
  <span>${todo.text}</span>
  <button class="delete-todo js-delete-todo">
  <svg><use href="#delete-icon"></use></svg>
  </button>
`;
  list.append(node);
}
function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);
  renderTodo(todo);
}

list.addEventListener("click", (event) => {
  if (event.target.classList.contains("js-tick")) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }
});
function toggleDone(key) {
  const index = todoItems.findIndex((item) => item.id === Number(key));
  todoItems[index].checked = !todoItems[index].checked;
  renderTodo(todoItems[index]);
}
function renderTodo(todo) {
  const list = document.querySelector(".js-todo-list");
  const item = document.querySelector(`[data-key='${todo.id}']`);

  const isChecked = todo.checked ? "done" : "";
  const node = document.createElement("li");
  node.setAttribute("class", `todo-item ${isChecked}`);
  node.setAttribute("data-key", todo.id);
  node.innerHTML = `
    <input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.text}</span>
    <button class="delete-todo js-delete-todo">
    <svg><use href="#delete-icon"></use></svg>
    </button>
  `;
  if (item) {
    list.replaceChild(node, item);
  } else {
    list.append(node);
  }
}
let list = document.querySelector(".js-todo-list");
list.addEventListener("click", (event) => {
  if (event.target.classList.contains("js-tick")) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }
  if (event.target.classList.contains("js-delete-todo")) {
    const itemKey = event.target.parentElement.dataset.key;
    deleteTodo(itemKey);
  }
});
function deleteTodo(key) {
  let index = todoItems.findIndex((item) => item.id === Number(key));
  const todo = {
    deleted: true,
    ...todoItems[index],
  };
  todoItems = todoItems.filter((item) => item.id !== Number(key));
  renderTodo(todo);
}
function renderTodo(todo) {
  let list = document.querySelector(".js-todo-list");
  let item = document.querySelector(`[data-key='${todo.id}']`);
  if (todo.deleted) {
    item.remove();
    return;
  }

  const isChecked = todo.checked ? "done" : "";
  const node = document.createElement("li");
  node.setAttribute("class", `todo-item ${isChecked}`);
  node.setAttribute("data-key", todo.id);
  node.innerHTML = `
    <input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.text}</span>
    <button class="delete-todo js-delete-todo">
    <svg><use href="#delete-icon"></use></svg>
    </button>
  `;

  if (item) {
    list.replaceChild(node, item);
  } else {
    list.append(node);
  }
}
if (todo.deleted) {
  item.remove();
  if (todoItems.length === 0) list.innerHTML = "";
  return;
}

//event.preventDefault() метод // если ивент не обрабатываеться значит его действик  не должно выполняться так  как обычно
