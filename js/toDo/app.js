import { qSelector, onTouch } from "../toDo/utilities.js";
import ToDos from "../toDo/toDos.js";

// windows onload 
window.addEventListener('load', () => {
    // create an instance of the ToDos class
    let toDoList = new ToDos();
    // populate the list from local storage, if there is one
    toDoList.loadList();
    toDoList.listTodos();
    // listen for the (+) item event
    onTouch('#add-button', () => {
        toDoList.addTodo();
    });
    // 
    qSelector('form')[0].addEventListener('submit', (event) => {
        // update list with new todo item
        toDoList.addTodo();
    });
});