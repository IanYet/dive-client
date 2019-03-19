import { ADD_TODO, DELETE_TODO } from './actionTypes'

const addTodo = todoItem => {
    type: ADD_TODO, todoItem
}

const deleteTodo = todoId => {
    type: DELETE_TODO, todoId
}

const todoActions = { addTodo, deleteTodo }

export default todoActions
