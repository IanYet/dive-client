import React from 'react'
import TodoInput from './TodoInput'
import { TodoList, TodoProvider } from './TodoList'

const App = props => (
    <TodoProvider>
        <TodoInput />
        <TodoList />
    </TodoProvider>
)

export default App
