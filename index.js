'use strict';



const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false
    }
  ];

const bodyHTML = document.querySelector('.js-div');
bodyHTML.innerHTML += ` <h1 class="title">To do list</h1>
                        <p class="text"> Tienes ${tasks.length} tareas registradas:</p>`;
bodyHTML.innerHTML += `<ul class="js-div-list"></ul>`;
let list = document.querySelector('.js-div-list');
bodyHTML.insertAdjacentHTML("beforeend", "<p class='message'></p>");



for (let i = 0; i < tasks.length; i++) {
    list.innerHTML += `<li class="js-list-li li">${tasks[i].name}</li>`;
    let item = list.querySelector('li:last-child');

    if (tasks[i].completed === true) {
        item.classList.add("completed");
        console.log('Está completado');
        list.innerHTML += `<div class="center"><input type="checkbox" checked></div>`;
    } else {
        item.classList.add("undone");
        console.log('No está completado');
        list.innerHTML += `<div class="center"><input type="checkbox" unchecked class="center"></div>`;
    }
}

const input = document.querySelectorAll('input[type=checkbox]');

function updateStatus() {
    console.log('Ejecutando handler');
    const listItems = document.querySelectorAll('li');
    for (let i = 0; i < input.length; i++) {
        if (input[i].checked === true) {
            tasks[i].completed = true;
            listItems[i].classList.remove('undone')
            listItems[i].classList.add('completed')
            input[i].classList.add('checked')
            input[i].classList.remove('unchecked')
        } else {
            tasks[i].completed = false;
            listItems[i].classList.remove('completed')
            listItems[i].classList.add('undone')
            input[i].classList.remove('checked')
            input[i].classList.add('unchecked')
        }
        update();
    }
}

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('change',updateStatus);
}

function update() {
    let completedTasks = document.querySelectorAll(
        'input[type="checkbox"]:checked'
      ).length;
    
    let total = parseInt(input.length) - parseInt(completedTasks);
    
    let message = document.querySelector('.message');
    message.innerHTML = `¡¡Tienes ${completedTasks} completadas y ${total} por hacer!!`;
}

update();