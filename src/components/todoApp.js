import React from "react";
import Header from "./header";
import TodoCreator from "./todoCreator";
import TodoList from "./todoList";

function TodoApp() {
    return (
        <div className='todo-app'>
            <Header />
            <TodoCreator />
            <TodoList />
        </div>
    );
}
export default TodoApp;
