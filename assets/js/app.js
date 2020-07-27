const items = document.querySelector(".items");
const submitForm = document.querySelector(".add");
const submitButton = document.querySelector(".add-btn");

let todos = ["Making coffe", "Study JS", "Take off the trash"];

function addTodo(e) {
  console.log('add Task')
}

function deleteTodo(e) { 
  console.log('delete task')
}

function tickTodo(e) { 
  console.log('tick Task');
}

function renderTodos() {
  todos.map((todo, id) => {

    let todoElement = `
      <div class="item">
        <input type="checkbox" name="item-${id}" id="item-${id}">
        <label for="item-1">${todo}</label>
        <i class="far fa-trash-alt delete-btn"></i>
      </div>`;
    console.log(todoElement)
    items.innerHTML += todoElement;

  })
}

renderTodos();
