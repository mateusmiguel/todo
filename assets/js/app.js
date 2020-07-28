const items = document.querySelector(".items");
const submitForm = document.querySelector(".add");
const submitInput = document.querySelector(".add input");
const submitButton = document.querySelector(".add-btn");
const dateElement = document.querySelector(".header-title");
const counterElement = document.querySelector(".header-counter");

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
  console.log("eeeiii")
  todos.push({
    task: submitInput.value,
    checked: false
  });

  submitInput.value = '';
  renderTodos();
}


function deleteTodo(id) {
  alert(id);
  // if (e.target.classList.contains('delete-btn')) {
  //   console.log('clicou')
  //   console.log(e)

  //   // e.target.parentElement.remove();
  // }
}


function tickTodo(e) { 
  console.log('tick Task');
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
      `${todos.length} Tasks`
    )
  );
}

function renderTodos() {
  items.innerHTML = '';
  todos.map((todo, id) => {
    let todoElement = `
      <div class="item" id="item-${id}">
        <input type="checkbox" ${todo.checked && 'checked'} name="item-${id}" id="item-${id}">
        <label for="item-${id}">${todo.task}</label>
        <i class="far fa-trash-alt delete-btn" onclick="deleteTodo(${id})"></i>
      </div>`;
    console.log(todoElement)
    items.innerHTML += todoElement;
  })
  renderCounter();

}

//TODO: Colocar tudo dento de uma função.

renderHeader(); 
renderTodos();

// items.addEventListener('click', deleteTodos);