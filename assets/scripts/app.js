const items = document.querySelector(".items");
const submitForm = document.querySelector(".add");
const submitInput = document.querySelector(".add input");
const submitButton = document.querySelector(".add-btn");
const dateElement = document.querySelector(".header-title");
const counterElement = document.querySelector(".header-counter");
const footerElement = document.querySelector(".footer");


submitForm.addEventListener("submit", addTodo);


let todos = [
  {
    task: 'Study JS',
    checked: true,
  },
  {
    task: 'Play guitar',
    checked: false,
  },
  {
    task: 'Take off the trash',
    checked: false,
  },
  {
    task: 'Go to market',
    checked: false
  }
];

function addTodo(e) {
  e.preventDefault();
  todos.push({
    task: submitInput.value,
    checked: false
  });

  submitInput.value = '';
  renderList();
}


function deleteTodo(pos) {
  todos.splice(pos, 1);
  
  renderList();
}


function tickTodo(pos) { 
  todos[pos].checked = !todos[pos].checked;

  renderFooter();
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
        <i class="far fa-trash-alt delete-btn" onclick="deleteTodo(${pos})"></i>
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
