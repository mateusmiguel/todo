const items = document.querySelector(".items");
const submitForm = document.querySelector(".add");
const submitButton = document.querySelector(".add-btn");
// const list = document.querySelector('.items .item') !== null ? document.querySelector('.items .item') : '0';
// let listLength = list.lenght ?;
// console.log(list);

function addTodo(e) {
  console.log('add Task')
}

function deleteTodo(e) { 
  console.log('delete task')
}

function tickTodo(e) { 
  console.log('tick Task');
}

function renderTodos(e) {
  console.log('render Tasks')
}

// let todos = ["Making coffe", "Study JS", "Take off the trash"];

// function renderTodos() {
//   for (todo of todos) {
//     var todoElement = document.createElement("div");
//     var todoText = document.createTextNode(todo);

//     todoElement.appendChild(todoText);
//     items.appendChild(todoElement);
//   }
// }

// const generateTemplate = (todo) => {
  // const html = `<li>
  //                 <input type="checkbox" id="todo_${listLength}" />
  //                 <label for="todo_${listLength}">
  //                     <span class="check"></span>${todo}
  //                 </label>
  //                 <i class="far fa-trash-alt delete"></i>
  //               </li>`;

//   const html = `
//     <div class="item">
//       <input type="checkbox" name="item-${listLenght}" id="item-{listLenght}">
//       <label for="item-1">${todo}</label>
//       <i class="far fa-trash-alt delete-btn"></i>
//     </div>`;

//   todoList.innerHTML += html;
// };

// renderTodos();
// 
// <div class="item">
//   <input type="checkbox" name="item-1" id="item-1">
//   <label for="item-1">Checkout email</label>
//   <i class="far fa-trash-alt delete-btn"></i>
// </div>
