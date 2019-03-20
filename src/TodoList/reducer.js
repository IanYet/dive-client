import { ADD_TODO, DELETE_TODO } from './actionTypes'

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case ADD_TODO: {
            const todo = {}
            todo.id = Date.now()
            todo.item = action.todoItem

            return [todo, ...state]
        }
        case DELETE_TODO: {
            const todoId = action.todoId

            return state.filter(todo => todo.id !== todoId)
        }
        default: {
            return state
        }
    }
}

export default reducer