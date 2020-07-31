const items = document.querySelector(".items");
const submitForm = document.querySelector(".add");
const submitInput = document.querySelector(".add input");
const submitButton = document.querySelector(".add-btn");
const dateElement = document.querySelector(".header-title");
const counterElement = document.querySelector(".header-counter");
const footerElement = document.querySelector(".footer");

submitForm.addEventListener("submit", addTodo);

let todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function addTodo(e) {
  e.preventDefault();
  todos.push({
    task: submitInput.value,
    checked: false
  });

  submitInput.value = '';
  renderList();
  saveToStorage();
}

function deleteTodo(pos) {
  todos.splice(pos, 1);  
  renderList();
  saveToStorage();
}

function deleteTodoByKey(event, pos) {
  if (event.keyCode === 13) {
    deleteTodo(pos);
  }
}

function tickTodo(pos) { 
  todos[pos].checked = !todos[pos].checked;

  renderFooter();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('list_todos', JSON.stringify(todos));
}

function renderHeader() {
  dateElement.appendChild(
    document.createTextNode(
      new Date().toDateString()
    )
  );
}

function renderCounter() { 
  counterElement.innerHTML = '';
  counterElement.appendChild(
    document.createTextNode(
      `${todos.length} tasks`
    )
  );
}

function renderFooter() {
  let checkedItems = todos.filter(item => item.checked === true).length;
  footerElement.innerHTML = '';
  footerElement.appendChild(
    document.createTextNode(
      todos.length > 0 ? `${checkedItems}/${todos.length} tasks completed` : "No tasks to show."
    )
  );
}

function renderList() {
  items.innerHTML = '';
  todos.map((todo) => {
    let pos = todos.indexOf(todo);
    let todoElement = `
      <div class="item" id="item-${pos}">
        <input type="checkbox" ${todo.checked && 'checked'} name="item-${pos}" id="item-${pos}" onclick="tickTodo(${pos})">
        <label for="item-${pos}">${todo.task}</label>
        <i tabindex="0" class="far fa-trash-alt delete-btn" onclick="deleteTodo(${pos})" onkeypress="deleteTodoByKey(event, ${pos})"></i>
      </div>`;
    items.innerHTML += todoElement;
  })

  renderCounter();
  renderFooter();
}

function renderTodo() {
  renderHeader(); 
  renderList();
  renderFooter();
}

renderTodo();
