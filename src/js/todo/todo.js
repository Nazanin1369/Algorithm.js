const inputEle = document.getElementById('todo');
const addBtn = document.getElementById('btn-add');
const doneList = document.getElementById('done-list');
const todoList = document.getElementById('todo-list');
const h4 = document.querySelector('h4');

const markTodoItem = event => {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('done')
    }
}
const addTodoItem = event => {
    if (inputEle.value && inputEle.value !== '') {
        const liEle = document.createElement('li');
        liEle.textContent = inputEle.value;
        liEle.addEventListener('click', toggleLists);
        todoList.appendChild(liEle);
        inputEle.value = '';
    }
    checkIfListHasItems();
}

const checkIfListHasItems = () => {
    if (doneList.children.length) {
        h4.style.display = 'block';
    } else {
        h4.style.display = 'none';
    }
    console.log(todoList.children.length, document.querySelector('hr'))
}

const toggleLists = event => {
    const item = event.target;
    const listId = item.parentElement.getAttribute('id');

    if (listId === 'todo-list') {
        doneList.appendChild(item);
    } else {
        item.classList.remove('done');
        todoList.appendChild(item);
    }
    checkIfListHasItems()
}

todoList.addEventListener('click', markTodoItem);
addBtn.addEventListener('click', addTodoItem);
checkIfListHasItems();