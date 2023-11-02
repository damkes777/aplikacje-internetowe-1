let todoInput
let errorInfo
let addBtn
let ulList
let popup
let popupInfo
let todoToEdit
let popupInput
let popupAddBtn
let popupCloseBtn
let inputDate
let popupDate
let todoArray = []

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input')
    inputDate = document.querySelector('.input-date')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')
    popup = document.querySelector('.popup')
    popupInfo = document.querySelector('.popup-info')
    popupDate = document.querySelector('.popup-date')
    popupInput = document.querySelector('.popup-input')
    popupAddBtn = document.querySelector('.accept')
    popupCloseBtn = document.querySelector('.cancel')
}

const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTodo)
    ulList.addEventListener('click', checkClick)
    popupCloseBtn.addEventListener('click', closePopup)
    popupAddBtn.addEventListener('click', changeTodoValue)
}

const addNewTodo = () => {
    if (todoInput.value !== '') {
        const newTodo = document.createElement('li')
        const newTodoDate = document.createElement('p')

        newTodoDate.textContent = inputDate.value
        newTodo.textContent = todoInput.value

        newTodo.append(newTodoDate)
        createToolsArea(newTodo)
        ulList.append(newTodo)

        todoInput.value = ''
        inputDate.value = ''
        errorInfo.textContent = ''
    } else {
        errorInfo.textContent = 'Wpisz treść zadania'
    }
}

const createToolsArea = (newTodo) => {
    const toolsPanel = document.createElement('div')
    toolsPanel.classList.add('tools')
    newTodo.append(toolsPanel)

    const completeBtn = document.createElement('button')
    completeBtn.classList.add('complete')
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

    toolsPanel.append(completeBtn, deleteBtn)
}

const checkClick = event => {
    if (event.target.matches('.complete')) {
        event.target.closest('li').classList.toggle('completed')
    }
    else if (event.target.matches('li')) {
        editTodo(event)
    }
    else if (event.target.matches('.delete')) {
        deleteTodo(event)
    }
}

const editTodo = event => {
    todoToEdit = event.target.closest('li')
    popupInput.value = todoToEdit.firstChild.textContent
    popupDate.value = todoToEdit.childNodes[1].textContent

    popup.style.display = 'flex'
}

const closePopup = () => {
    popup.style.display = 'none'
}

const changeTodoValue = () => {
    if (popupInput.value !== '') {
        todoToEdit.firstChild.textContent = popupInput.value
        todoToEdit.childNodes[1].textContent = popupDate.value
        popup.style.display = 'none'
        popupInfo.textContent = ''
    } else {
        popupInfo.textContent = 'Musisz podać treść'
    }
}

const deleteTodo = event => {
    event.target.closest('li').remove()
    const allTodos = document.querySelectorAll('li')

    if (allTodos.length === 0) {
        errorInfo.textContent = 'Brak zadań na liście'
    }

}



document.addEventListener('DOMContentLoaded', main)