/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/***/ (() => {

eval("const items = document.querySelector(\".items\");\nconst submitForm = document.querySelector(\".add\");\nconst submitInput = document.querySelector(\".add input\");\nconst submitButton = document.querySelector(\".add-btn\");\nconst dateElement = document.querySelector(\".header-title\");\nconst counterElement = document.querySelector(\".header-counter\");\nconst footerElement = document.querySelector(\".footer-info\");\n\nsubmitForm.addEventListener(\"submit\", addTodo);\n\nlet todos = JSON.parse(localStorage.getItem(\"list_todos\")) || [];\n\nfunction addTodo(e) {\n  e.preventDefault();\n  todos.push({\n    task: submitInput.value,\n    checked: false,\n  });\n\n  submitInput.value = \"\";\n  renderList();\n  saveToStorage();\n}\n\nfunction deleteTodo(pos) {\n  todos.splice(pos, 1);\n  renderList();\n  saveToStorage();\n}\n\nfunction deleteTodoByKey(event, pos) {\n  if (event.keyCode === 13) {\n    deleteTodo(pos);\n  }\n}\n\nfunction tickTodo(pos) {\n  todos[pos].checked = !todos[pos].checked;\n\n  renderFooter();\n  saveToStorage();\n}\n\nfunction saveToStorage() {\n  localStorage.setItem(\"list_todos\", JSON.stringify(todos));\n}\n\nfunction renderHeader() {\n  dateElement.appendChild(document.createTextNode(new Date().toDateString()));\n}\n\nfunction renderCounter() {\n  counterElement.innerHTML = \"\";\n  counterElement.appendChild(document.createTextNode(`${todos.length} tasks`));\n}\n\nfunction renderFooter() {\n  let checkedItems = todos.filter((item) => item.checked === true).length;\n  footerElement.innerHTML = \"\";\n  footerElement.appendChild(\n    document.createTextNode(\n      todos.length > 0\n        ? `${checkedItems}/${todos.length} tasks completed`\n        : \"No tasks to show.\"\n    )\n  );\n}\n\nfunction renderList() {\n  items.innerHTML = \"\";\n  todos.map((todo) => {\n    let pos = todos.indexOf(todo);\n    let todoElement = `\n      <div class=\"item\" id=\"item-${pos}\">\n        <input type=\"checkbox\" ${\n          todo.checked && \"checked\"\n        } name=\"item-${pos}\" id=\"item-${pos}\" onclick=\"tickTodo(${pos})\">\n        <label for=\"item-${pos}\">${todo.task}</label>\n        <i tabindex=\"0\" class=\"far fa-trash-alt delete-btn\" onclick=\"deleteTodo(${pos})\" onkeypress=\"deleteTodoByKey(event, ${pos})\"></i>\n      </div>`;\n    items.innerHTML += todoElement;\n  });\n\n  renderCounter();\n  renderFooter();\n}\n\nfunction renderTodo() {\n  renderHeader();\n  renderList();\n  renderFooter();\n}\n\nrenderTodo();\n\n\n//# sourceURL=webpack://todoup/./src/scripts/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/app.js"]();
/******/ 	
/******/ })()
;