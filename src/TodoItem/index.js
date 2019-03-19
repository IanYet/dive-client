import React, { useContext } from 'react'
import { actions, TodoContext } from '../TodoList'

const TodoItem = props => {
    const { dispatch } = useContext(TodoContext)

    return (
        <div>
            <p>{props.value}</p>
            <button onClick={() => dispatch(actions.deleteTodo(props.id))}>
                x
            </button>
        </div>
    )
}

export default TodoItem