
const formAddTodo = document.querySelector('.form-add-todo');
const todosContainer = document.querySelector('.todos-container');
const formSearchInput = document.querySelector('.form-search input');



const addToDo = value => {

    if (value) {
        todosContainer.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${value}">
                <span>${value}</span>
                <i class="far fa-trash-alt delete" data-trash="${value}"></i>
            </li>
        `
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

    event.target.reset();
    
});


//remove to-do
todosContainer.addEventListener('click', event => {

    const clickedElement = event.target;

    removeToDo(clickedElement);


});





//filter to-do
const filterToDo = (element, value) => {
    return element.textContent.toLowerCase().includes(value);
};


const enableOrDisableToDo = (element, callback, value) => {

    if(!callback(element, value)) {
        element.classList.remove('d-flex');
        element.classList.add('hidden');

    } else {
        element.classList.remove('hidden');
        element.classList.add('d-flex');

    }    

    
}




formSearchInput.addEventListener('input', event => {
    const inputValue = event.target.value.toLowerCase().trim();

    Array.from(todosContainer.children)
        .filter(todo => !filterToDo(todo, inputValue))
        .forEach(todo => {
           enableOrDisableToDo(todo, filterToDo, inputValue);

            // todo.classList.remove('d-flex');
            // todo.classList.add('hidden');
    });

    Array.from(todosContainer.children)
        .filter(todo => filterToDo(todo, inputValue))
        .forEach(todo => {
            enableOrDisableToDo(todo, filterToDo, inputValue)
            // todo.classList.remove('hidden');
            // todo.classList.add('d-flex');
    });
    // debugger    
    
});
