const form = document.querySelector('.add')
const search = document.querySelector('.search input')
let list = document.querySelector('.todos')
let delete_all = document.querySelector('.delete-all')

// create task
const createTask = task => {
    list.innerHTML += `<li class="list-group-item">${task}<span class="delete material-icons float-right">delete_outline</span></li>`
}

form.addEventListener('submit', e => {
    e.preventDefault()

    // get input and remove spaces
    const task = form.task.value.trim().toLowerCase()

    // add task to list
    if(task.length) {
        createTask(task) 
    }
    
    // reset form
    form.reset()
})

// delete task - event delegation
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove()
    }
})

// delete all tasks
delete_all.addEventListener('click', () => {
    list.innerHTML = ''
})
// filter tasks
const filterTodos = word => {
    const tasks = Array.from(list.children)
    // hide if doesn't match
    tasks.filter(task => !task.textContent.includes(word)) 
        .forEach(task => task.classList.add('hide'))

    // show if match
    tasks.filter(task => task.textContent.includes(word)) 
        .forEach(task => task.classList.remove('hide'))
}

// search tasks
search.addEventListener('keyup', () => {
    const word = search.value.trim().toLowerCase()
    filterTodos(word)
})