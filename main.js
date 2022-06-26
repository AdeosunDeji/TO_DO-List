const myTask = document.querySelector('#my-tasks');
const msg = document.querySelector('.msg');
const todoInput = document.querySelector('#todo');
const Task = document.querySelector('#tasks');

myTask.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(todoInput.value === '') {
        msg.innerHTML = 'Please enter field';

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${todoInput.value}`));

        Task.appendChild(li);

        //clear fields
        todoInput.value = '';
    }
}