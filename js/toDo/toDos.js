import { readLocalStorage, writeLocalStorage, removeFromLocalStorage } from "../toDo/localStorage.js";
import { qSelector, onTouch } from "../toDo/utilities.js";

export default class ToDos {
    // create constructor to hold list data
	constructor() {
		this.list = [];
		this.key = "list";
    }

    // load the saved list from local storage
    loadList() {
        let currentList = getToDos(this.key);
        // check for null value
        if (currentList !== null) {
            this.list = currentList;
        }
        return this.list;
    }

    // display todos based on filter
    listTodos(checked) {
        checked = checked ? checked : "all";
        // display footed with highlighted active filter
        renderFooter(this.list, checked, qSelector(".list-contents")[0]);
        // display list of selected todos
        renderTodoList(this.list, qSelector("#list")[0]);
        
        // listen for events
        onTouch(".checkbox", (event) => this.toggleToDo(event.target));
        onTouch(".remove-btn", (event) => this.removeToDo(event.target));
        onTouch("input[name=filter]", (event) => this.filterToDos(event.target.id));
    }

    // add new todo item
    addTodo() {
        // get text content
        let content = qSelector("#item-input")[0].value;
        // prevent empty strings from being added to the list
        if (content == "") { return; }
        // use current date/time code as unique identifier
        let id = Date.now();
        // create new item object
        let newItem = {
            id: id, 
            content: content, 
            completed: false
        }
        console.log(`ToDo item added: ${newItem.content}`);
        // get current list
        let list = getToDos(this.key);
        // add new item to current list
        list.push(newItem);
        // update the todo list in local storage
        saveToDo(this.key, list);
        this.filterToDos();
        // remove the todo text from the input field
        qSelector("#item-input")[0].value = "";
    }

    // respond to check action 
    toggleToDo(target) {
        let listItem = target.closest(".list-item");
        // get the current list of todo items
        let list = getToDos(this.key);
        // verify listItem
        if (listItem) {
            // ensure check action updates correctly
            list.map(function(item) {
                if (item.id === Number(listItem.id)) {
                    item.completed = !item.completed;
                }
                return item;
            }).find((item) => { 
                return item.id === Number( listItem.id ); 
            });
            // update list in local storage
            saveToDo(this.key, list);
            // update list in UI
            this.filterToDos();
        } else {
            console.log(`Error: toggleToDo listItem value = ${listItem}`);
        }
    }

    removeToDo(target) {
        let listItem = target.closest(".list-item");
        // verify listItem
        if (listItem) {
            // get current list of items
            let list = getToDos(this.key).filter((item) => { 
                return item.id !== Number(listItem.id); 
            });
            // remove the selected item
            removeFromLocalStorage(listItem.id);
            // make update to list
            saveToDo(this.key, list);
            // update list in UI
            this.filterToDos();
        } else {
            console.log(`Error: removeToDo listItem value = ${listItem}`);
        }
    }

    // filter todo items
    filterToDos() {
        // get list of items
        let radioSelector = qSelector("input[name=filter]:checked")[0];
        if (radioSelector) {
            // update list based on filter selection 
            let selected = radioSelector ? radioSelector.value : "all";
            switch(selected) {
                case "all":
                    this.list = getToDos(this.key);
                    break;
                case "active":
                    this.list = getToDos(this.key).filter((item) => { return !item.completed; });
                    break;
                case "completed":
                    this.list = getToDos(this.key).filter((item) => { return item.completed; });
                    break;
                default:
                    this.list = getToDos(this.key);
            }		
            this.listTodos(selected);
        } else {
            console.log(`Error: filterToDo radioSelector value = ${radioSelector}`);
        }
    }
}

// gets all todo items in local storage
function getToDos(key) {
	let todos = readLocalStorage(key)
	return todos ? todos : [];
}

// updates todo list in local storage
function saveToDo(key, task) {
	writeLocalStorage(key, task);
}

function renderTodoList(list, element) {
    // verify list is an object
    if (typeof(list) == "object") {
        // clear current list information
        element.innerHTML = "";
        // create html output for each list item
        list.forEach((item) => {
            let checked = item.completed ? "checked" : "";
            let itemHtml = document.createElement("div");
            itemHtml.className = "list-item";
            itemHtml.id = item.id;
            itemHtml.innerHTML = 
            `<div class="container">
                <input type="checkbox" class="checkbox" ${checked}>
                <span class="checkmark"></span>
                <span>${item.content}</span>
            </div>
            <span class="remove-btn">X</span>`;
            // add element to page
            element.appendChild(itemHtml);
        });
        // set default output if list is empty
        if (list.length == 0) {
            let itemHtml = document.createElement("div");
            itemHtml.id = "no-tasks";
            itemHtml.innerHTML = "No tasks to display";
            element.appendChild(itemHtml);
        }
    } else {
        console.log(`Error: renderTodoList list value ${list} is not an 'object'.`);
    }
}

// create footer with filter options
function renderFooter(list, checked, element) {
    // prevent multiple footers from being creaated
	element.removeChild(element.lastChild);
    // get number of tasks yet to be completed
	let tasksLeft = list.filter((item) => { 
        return !item.completed; 
    }).length;
	let allChecked = checked === "all" ? "checked" : "";
	let activeChecked = checked === "active" ? "checked" : "";
	let completedChecked = checked === "completed" ? "checked" : "";
	// address the need for proper English
    let pros = function() {
        if (tasksLeft > 1) {
            return "tasks left";
        } else if (tasksLeft === 1) {
            return "task left";
        } else {
            return "tasks"
        }
    }
    // reate html output for the footer section
	const footer = document.createElement("div");
	footer.id = "list-footer";
	footer.innerHTML = `<span>${tasksLeft} ${pros()}</span>
	    <div>
            <input type="radio" id="all" name="filter" value="all" ${allChecked}>
	        <label for="all">All</label>
	        <input type="radio" id="active" name="filter" value="active" ${activeChecked}>
	        <label for="active">Active</label>
	        <input type="radio" id="completed" name="filter" value="completed" ${completedChecked}>
	        <label for="completed">Completed</label>
        </div>`;
    // add footer html to page
	element.appendChild(footer);
}