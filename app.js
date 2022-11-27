
const formAddTodo = document.querySelector('.form-add-todo');
const todosContainer = document.querySelector('.todos-container');
const formSearchInput = document.querySelector('.form-search input');



const addToDo = inputValue => {

    if (inputValue.length) {
        todosContainer.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
                <span>${inputValue}</span>
                <i class="far fa-trash-alt delete" data-trash="${inputValue}"></i>
            </li>
        `
        event.target.reset();
    }

};



const removeToDo = element => {

    const valueDatasetClicked = element.dataset.trash;    
    const todo = document.querySelector(`[data-todo="${valueDatasetClicked}"]`);

    if (valueDatasetClicked) {
        
        todo.remove();
    
    }
    
};




//add to-do
formAddTodo.addEventListener('submit', event => {
    event.preventDefault();

    const inputValue = event.target.add.value.trim();

    addToDo(inputValue);

    
    
});


//remove to-do
todosContainer.addEventListener('click', event => {

    const clickedElement = event.target;

    removeToDo(clickedElement);


});





//filter to-do


const filterTodos = (todos, inputValue, returnMatchedTodos) => {
    return todos
        .filter(todo => {
            const matchedTodos = todo.textContent.toLowerCase().includes(inputValue);
            return returnMatchedTodos ? matchedTodos : !matchedTodos //bollean
        })
}


const hideTodos = (todos, inputValue) => {
    filterTodos(todos, inputValue, false)
        .forEach(todo => {
            todo.classList.remove('d-flex');
            todo.classList.add('hidden');
    });

};


const showTodos = (todos, inputValue) => {
    filterTodos(todos, inputValue, true)
        .forEach(todo => {        
            todo.classList.remove('hidden');
            todo.classList.add('d-flex');
    });

};

formSearchInput.addEventListener('input', event => {
    const inputValue = event.target.value.toLowerCase().trim();
    const todos = Array.from(todosContainer.children);

    hideTodos(todos, inputValue);
    showTodos(todos, inputValue);
    
    
});
