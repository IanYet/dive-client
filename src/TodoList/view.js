import React, { useContext } from 'react'
import { TodoContext } from './context'

import TodoItem from '../TodoItem'

const TodoList = props => {
    const { state } = useContext(TodoContext)
    const todoList = state.map(todo => <TodoItem value={todo.item} id={todo.id} key={todo.id} />)

    return <div>{todoList}</div>
}

export default TodoList