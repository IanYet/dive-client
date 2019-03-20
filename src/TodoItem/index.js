import React, { useContext } from 'react'
import { todoActions, TodoContext } from '../TodoList'

const TodoItem = props => {
    const { dispatch } = useContext(TodoContext)

    return (
        <div>
            <p>{props.value}</p>
            <button onClick={() => dispatch(todoActions.deleteTodo(props.id))}>
                x
            </button>
        </div>
    )
}

export default TodoItem