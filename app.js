const formAddTodo = document.querySelector('.form-add-todo');


formAddTodo.addEventListener('submit', event => {
    event.preventDefault();

    const inputValue = event.target.add.value;
    console.log(inputValue);
    

});