// =============  ToDo task list  ================

const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
// console.log(todoList, todoForm, todoInput);

todoForm.addEventListener('submit', formHandler);

function formHandler(event) {
  event.preventDefault();

  //Getting the name of the task from the input
  const taskText = todoInput.value;
  // const newTask = `<li>${newTask}</li>`;

  //Create an "li" tag by creating an element
  const newTask = document.createElement('li');
  newTask.innerText = taskText;

  // Add an element to the page
  todoList.append(newTask);

  // Create a Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('role', 'button');
  deleteBtn.innerText = 'Delete🟦🟨';
  deleteBtn.style['margin-left'] = '14px';
  newTask.append(deleteBtn);

  //Add a click event
  deleteBtn.addEventListener('click', function () {
    this.closest('li').remove();
  });

  //Add a click event (arrow function)
  //?deleteBtn.addEventListener('click', (e) => e.target.closest('li').remove())

  //context this (arrow function)
  //?const arrowHasNoOwnThis = () => this.closest('li').remove();
  //! const arrowHasNoOwnThis = () => {
  //! console.log(this)
  // ! this.closest('li').remove();
  // !}
  //!deleteBtn.addEventListener('click', arrowHasNoOwnThis);

  // Clear the input field
  todoInput.value = '';

  // Focus on the input field
  todoInput.focus();
}
