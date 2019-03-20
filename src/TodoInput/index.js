import React, { useContext, useState } from 'react'
import { TodoContext, todoActions } from '../TodoList'

const TodoInput = props => {
    const [value, setValue] = useState('')
    const { dispatch } = useContext(TodoContext)

    const handleKey = e => {
        if (e.key === 'Enter') {
            setValue('')
            dispatch(todoActions.addTodo(value))
            return
        }
    }

    return (
        <div>
            <input
                onKeyDown={handleKey}
                onChange={e => setValue(e.currentTarget.value)}
                value={value}
            />
        </div>
    )
}

export default TodoInput
