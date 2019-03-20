import React, { createContext, useReducer } from 'react'

import reducer from './reducer'

const TodoContext = createContext()
const initContext = []

const TodoProvider = props => {
    const [state, dispatch] = useReducer(reducer, initContext)

    return (
        <TodoContext.Provider value={{state, dispatch}}>
            {props.children}
        </TodoContext.Provider>
    )
}

export {TodoProvider, TodoContext}