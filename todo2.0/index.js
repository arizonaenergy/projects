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
//event.preventDefault() метод // если ивент не обрабатываеться значит его действик  не должно выполняться так  как обычно
