
const formAddTodo = document.querySelector('.form-add-todo');
const todosContainer = document.querySelector('.todos-container');
const formSearchInput = document.querySelector('.form-search input');



const removeToDo = (element) => {

    const valueDatasetClicked = element.dataset.trash;    

    if (valueDatasetClicked) {
        
        document.querySelector(`[data-todo="${valueDatasetClicked}"]`).remove();
    
    }
    
}


//add to-do
formAddTodo.addEventListener('submit', event => {
    event.preventDefault();

    const inputValue = event.target.add.value.trim();

    if (inputValue) {
        todosContainer.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
                <span>${inputValue}</span>
                <i class="far fa-trash-alt delete" data-trash="${inputValue}"></i>
            </li>
        `

        event.target.reset();
    }
    
});


//remove to-do
todosContainer.addEventListener('click', event => {

    const clickedElement = event.target;

    removeToDo(clickedElement);


});



//filter to-do
formSearchInput.addEventListener('input', event => {
    const inputValue = event.target.value.toLowerCase().trim();

    Array.from(todosContainer.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
        .forEach(todo => {
            todo.classList.remove('d-flex');
            todo.classList.add('hidden');
    });
    Array.from(todosContainer.children)
        .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
        .forEach(todo => {
            todo.classList.remove('hidden');
            todo.classList.add('d-flex');
    });
    
});
